import {from, Observable} from "rxjs";
import {UserContentData} from "../model/user-content-data";

const mockUserData = [
  {
    id: '001',
    title: 'Coding',
    tabColor: '#bedbb7',
    // language=HTML
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, commodi, ducimus fuga harum iure molestias nostrum nulla quidem sit sunt vero voluptatum? Alias error inventore laborum mollitia neque numquam, vel.</div><div>Alias aperiam aspernatur blanditiis, consectetur culpa debitis dolor doloribus eligendi exercitationem ipsam molestias neque nisi officiis quibusdam quo quod, quos rem repellat sapiente ut! Aliquid delectus est eveniet sit voluptas.</div><div>Amet cum eaque nulla odio quis, quisquam sapiente? Accusamus aliquid aperiam, asperiores aut corporis delectus eius enim error illum inventore labore molestias optio quae quam quibusdam quos sed tempore ullam?</div><div>Accusamus alias assumenda at commodi, deleniti eaque est et ex illo iste laudantium maiores non nulla obcaecati odit optio quaerat quia reprehenderit sapiente sed sit, temporibus vel vero! Optio, vel.</div><div>Consectetur facilis minima sint temporibus. Alias consectetur dolorem eveniet facilis laboriosam natus officia quam, saepe sit! Alias aliquid corporis earum, explicabo ipsa non, porro quam quas qui quisquam sunt vero.'
  },
  {
    id: '002',
    title: 'Design',
    tabColor: '#ea9103',
    // language=HTML
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Praesent tristique magna sit amet.'
  },
  {
    id: '003',
    title: 'Gaming',
    tabColor: '#0077ff',
    // language=HTML
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper eget duis at tellus at. Amet risus nullam eget felis eget. Ultrices eros in cursus turpis massa tincidunt dui. Elit ut aliquam purus sit.'
  },
  {
    id: '004',
    title: 'Research',
    tabColor: '#9a040a',
    // language=HTML
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Neque vitae tempus quam pellentesque. Sagittis vitae et leo duis ut. Enim nunc faucibus a pellentesque sit amet porttitor. Sollicitudin nibh sit amet commodo. Vitae tortor condimentum lacinia quis vel eros donec.'
  }
];
export class MockBackendApi {
  public static getMockUserData(): Observable<UserContentData[]> {
    return from ([mockUserData]);
  }
}
