import { Homepagebody } from '../Homepage body/body';
import { Navbar } from '../Navbar/Navbar';

export let Homepage = () => {
  return (
    <>
      <Navbar heading={'Galaxy'}></Navbar>
      <Homepagebody></Homepagebody>
    </>
  );
};
