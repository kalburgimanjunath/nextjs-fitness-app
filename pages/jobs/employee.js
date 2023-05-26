import { Input } from '../../components/';
export default function Employee() {
  return (
    <div>
      <h4>Employees can create company profiles and add job requirements</h4>

      <div>
        <Input type="text" label="username" />
        <Input type="text" label="email" />
        <Input type="text" label="address" />
        <Input type="text" label="Upload your company logo" />
        <Input type="text" label="name" />
        <Input type="text" label="where you are born" />
        <Input type="text" label="headline" />
        <Input type="text" label="about you" />
      </div>
      <footer>
        <button className="btn btn-primary">Save</button>
        <button className="btn btn-default">Cancel</button>
      </footer>
    </div>
  );
}
