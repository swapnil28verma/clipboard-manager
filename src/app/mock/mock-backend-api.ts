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
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, commodi, ducimus fuga harum iure molestias nostrum nulla quidem sit sunt vero voluptatum? Alias error inventore laborum mollitia neque numquam, vel.</div><div>Alias aperiam aspernatur blanditiis, consectetur culpa debitis dolor doloribus eligendi exercitationem ipsam molestias neque nisi officiis quibusdam quo quod, quos rem repellat sapiente ut! Aliquid delectus est eveniet sit voluptas.</div><div>Amet cum eaque nulla odio quis, quisquam sapiente? Accusamus aliquid aperiam, asperiores aut corporis delectus eius enim error illum inventore labore molestias optio quae quam quibusdam quos sed tempore ullam?</div><div>Accusamus alias assumenda at commodi, deleniti eaque est et ex illo iste laudantium maiores non nulla obcaecati odit optio quaerat quia reprehenderit sapiente sed sit, temporibus vel vero! Optio, vel.</div><div>Consectetur facilis minima sint temporibus. Alias consectetur dolorem eveniet facilis laboriosam natus officia quam, saepe sit! Alias aliquid corporis earum, explicabo ipsa non, porro quam quas qui quisquam sunt vero.'
  },
  {
    id: '003',
    title: 'Gaming',
    tabColor: '#0077ff',
    // language=HTML
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, commodi, ducimus fuga harum iure molestias nostrum nulla quidem sit sunt vero voluptatum? Alias error inventore laborum mollitia neque numquam, vel.</div><div>Alias aperiam aspernatur blanditiis, consectetur culpa debitis dolor doloribus eligendi exercitationem ipsam molestias neque nisi officiis quibusdam quo quod, quos rem repellat sapiente ut! Aliquid delectus est eveniet sit voluptas.</div><div>Amet cum eaque nulla odio quis, quisquam sapiente? Accusamus aliquid aperiam, asperiores aut corporis delectus eius enim error illum inventore labore molestias optio quae quam quibusdam quos sed tempore ullam?</div><div>Accusamus alias assumenda at commodi, deleniti eaque est et ex illo iste laudantium maiores non nulla obcaecati odit optio quaerat quia reprehenderit sapiente sed sit, temporibus vel vero! Optio, vel.</div><div>Consectetur facilis minima sint temporibus. Alias consectetur dolorem eveniet facilis laboriosam natus officia quam, saepe sit! Alias aliquid corporis earum, explicabo ipsa non, porro quam quas qui quisquam sunt vero.'
  },
  {
    id: '004',
    title: 'Research',
    tabColor: '#9a040a',
    // language=HTML
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, commodi, ducimus fuga harum iure molestias nostrum nulla quidem sit sunt vero voluptatum? Alias error inventore laborum mollitia neque numquam, vel.</div><div>Alias aperiam aspernatur blanditiis, consectetur culpa debitis dolor doloribus eligendi exercitationem ipsam molestias neque nisi officiis quibusdam quo quod, quos rem repellat sapiente ut! Aliquid delectus est eveniet sit voluptas.</div><div>Amet cum eaque nulla odio quis, quisquam sapiente? Accusamus aliquid aperiam, asperiores aut corporis delectus eius enim error illum inventore labore molestias optio quae quam quibusdam quos sed tempore ullam?</div><div>Accusamus alias assumenda at commodi, deleniti eaque est et ex illo iste laudantium maiores non nulla obcaecati odit optio quaerat quia reprehenderit sapiente sed sit, temporibus vel vero! Optio, vel.</div><div>Consectetur facilis minima sint temporibus. Alias consectetur dolorem eveniet facilis laboriosam natus officia quam, saepe sit! Alias aliquid corporis earum, explicabo ipsa non, porro quam quas qui quisquam sunt vero.'
  }
];
export class MockBackendApi {
  public static getMockUserData(): Observable<UserContentData[]> {
    return from ([mockUserData]);
  }
}
