import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contactsList = useSelector((state) => state.contacts.items);
  const filterText = useSelector((state) => state.filters.name);

  return (
    <ul className={css.contactList}>
      {contactsList
        .filter((e) => e.name.toLowerCase().includes(filterText.toLowerCase()))
        .map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
    </ul>
  );
};

export default ContactList;
