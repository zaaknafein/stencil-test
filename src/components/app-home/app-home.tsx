import { Component, h, State } from '@stencil/core';
import { UserService } from '../../services/user.service';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: false,
})
export class AppHome {

  private service = new UserService();
  @State() user: string;

  private loadUser(id: number): void {
    this.service.find(id)
    .then(response => this.user = response.data.name)
    .catch(error => {
      console.error(`an error occured: ${error}`);
      this.user = 'UNKNOWN USER';
      console.log(this.user);
    });
  }

  render() {
    return (
      <div class="app-home">
        <p>
          <span>Welcome to the Stencil App Starter {this.user}.</span> You can use this starter to build entire apps all with web components using Stencil! Check out our docs on{' '}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>
        <button
          onClick={() => this.loadUser(123)}
        >
          show user
        </button>
      </div>
    );
  }
}
