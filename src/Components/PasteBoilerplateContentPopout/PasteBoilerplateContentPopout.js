import React, { useState, useEffect, useContext, useMemo } from "react";
import TextBox from "../design/TextBox/TextBox";
import AccordionTable from "../design/Accordion/AccordionTable/AccordionTable";
import "./PasteBoilerplateContentPopout.css";
import { PasteBoilerplateContentPopoutContext } from "./PasteBoilerplateContentPopoutContext";
import CloseIcon from "@material-ui/icons/Close";
import { useCurrentOrganizationContext } from "../../Contexts/currentOrganizationContext";

import { getAllBoilerplates } from "../../Services/Organizations/BoilerplatesService";
// import BoilerplatesTable from "./Boilerplates/BoilerplatesTable";

export default function PasteBoilerplateContentPopout() {
  const columns = [
    { Header: "Title", accessor: "title" },
    { Header: "Category", accessor: "category" },
    { Header: "Word Count", accessor: "wordCount" },
  ];
  const { organizationClient } = useCurrentOrganizationContext();
  const { pasteBoilerplate, setIsOpen } = useContext(
    PasteBoilerplateContentPopoutContext
  );
  const [searchFilters, setSearchFilters] = useState({
    text: "",
    category: "",
    maxWordCount: null,
  });
  const [boilerplates, setBoilerplates] = useState([]);
  const filteredBoilerplates = useMemo(() => {
    return boilerplates.filter((boilerplate) => {
      return boilerplate.title.includes(searchFilters.text);
    });
  }, [boilerplates, searchFilters]);

  useEffect(() => {
    getAllBoilerplates(organizationClient)
      .then((boilerplates) => {
        setBoilerplates(boilerplates);
      })
      .catch((error) => console.log(error));
  }, [organizationClient]);

  return (
    <aside className="paste-boilerplate-content-popout">
      <h2 className="heading-3">Paste Boilerplate Content</h2>
      <CloseIcon
        onClick={() => {
          setIsOpen(false);
        }}
      />
      <TextBox
        labelText="Search"
        onChange={(event) =>
          setSearchFilters({ ...searchFilters, text: event.target.value })
        }
      />
      {/* Category will be a dropdown */}
      <TextBox
        labelText="Category"
        onChange={(event) =>
          setSearchFilters({
            ...searchFilters,
            category: event.target.value,
          })
        }
      />
      <TextBox
        labelText="Max Word Count"
        onChange={(event) =>
          setSearchFilters({
            ...searchFilters,
            maxWordCount: event.target.value,
          })
        }
      />
      <AccordionTable columns={columns} data={filteredBoilerplates} />
    </aside>
  );
}

// <heroheader>
// </heroheader>
// <aside />
// <content>
// <content></heroheader>
