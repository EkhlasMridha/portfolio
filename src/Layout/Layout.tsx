import "./Layout.scss";
import { Navigation } from "./Navigations/Navigation";
import { NavigationItemsProps } from "./Navigations/navigations.type";

const menuItems: NavigationItemsProps = [
  {
    label: "About",
    key: "about",
  },
  {
    label: "Works",
    key: "works",
  },
  {
    label: "Contact",
    key: "contact",
  },
];

export const Layout = (props: any) => {
  return (
    <>
      <Navigation items={menuItems} />
      <div className="landing-body">
        alksd kl hkdjashdkjasdh kljahdklasjhd askljd h alksd kl hkdjashdkjasdh
        kljahdklasjhd askljd h alksd kl hkdjashdkjasdh kljahdklasjhd askljd h
        alksd kl hkdjashdkjasdh kljahdklasjhd askljd h alksd kl hkdjashdkjasdh
        kljahdklasjhd askljd h alksd kl hkdjashdkjasdh kljahdklasjhd askljd h
        alksd kl hkdjashdkjasdh kljahdklasjhd askljd h alksd kl hkdjashdkjasdh
        kljahdklasjhd askljd h alksd kl hkdjashdkjasdh kljahdklasjhd askljd h
      </div>
    </>
  );
};
