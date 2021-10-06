import React, { useState, useEffect, useContext, useMemo } from "react";
import TextBox from "../design/TextBox/TextBox";
import AccordionTable from "../design/Accordion/AccordionTable/AccordionTable";
import "./PasteBoilerplateContentPopout.css";
import { PasteBoilerplateContentPopoutContext } from "./PasteBoilerplateContentPopoutContext";
import PasteBoilerplateTextPanel from "./PasteBoilerplateTextPanel";
import CloseIcon from "@material-ui/icons/Close";
import { useCurrentOrganizationContext } from "../../Contexts/currentOrganizationContext";

import { getAllBoilerplates } from "../../Services/Organizations/BoilerplatesService";
// import BoilerplatesTable from "./Boilerplates/BoilerplatesTable";

export default function PasteBoilerplateContentPopout() {
  const columns = [
    { Header: "Title", accessor: "title" },
    { Header: "Category", accessor: "category_name" },
    { Header: "Word Count", accessor: "wordcount" },
  ];
  const { organizationClient } = useCurrentOrganizationContext();
  const { pasteBoilerplate, setIsOpen } = useContext(
    PasteBoilerplateContentPopoutContext
  );
  // set up "waspasted" function for checkmark on boilerplates

  //map through filteredboilerplates to get value for expandable content
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
  const filteredBoilerplatesWithPanels = useMemo(() => {
    return filteredBoilerplates.map((filteredBoilerplate) => ({
      ...filteredBoilerplate,
      _expandableContent: (
        <PasteBoilerplateTextPanel boilerplate={filteredBoilerplate} />
      ),
    }));
  }, [filteredBoilerplates]);

  const filteredBoilerplatesWithPasted = filteredBoilerplates.map(
    (filteredBoilerplate) => ({
      ...filteredBoilerplate,
      wasPasted: false,
    })
  );

  // <PasteBoilerplateTextPanel
  //               data={data}
  //               handleClickPasteBoilerplate={handleClickPasteBoilerplate}
  //             />

  useEffect(() => {
    getAllBoilerplates(organizationClient)
      .then((boilerplates) => {
        setBoilerplates(boilerplates);
      })
      .catch((error) => console.log(error));
  }, [organizationClient]);

  // useEffect(() => {
  //   onPasteBoilerplate((boilerplate) => {
  //     setSectionFields((previousSectionFields) => ({
  //       ...previousSectionFields,
  //       html: previousSectionFields.html + "\n" + boilerplate,
  //     }));
  //     console.log(boilerplate, sectionFields);
  //   });

  // const handleClickPasteBoilerplate = () => {
  //   console.log("you clicked Click Paste Boilerplate!");
  // };

  const handleClickPasteBoilerplate = (pastedBoilerplate) => {
    pasteBoilerplate(pastedBoilerplate.text);
    handleWasPasted(pastedBoilerplate.id);
  };

  const handleWasPasted = (id) => {
    filteredBoilerplatesWithPasted.map((filteredBoilerplateWithPasted) => {
      if (filteredBoilerplateWithPasted.id === id) {
        filteredBoilerplateWithPasted.wasPasted = true;
      }
    });
  };

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
      <AccordionTable
        columns={columns}
        data={filteredBoilerplatesWithPanels}
        handleClickPasteBoilerplate={handleClickPasteBoilerplate}
        handleWasPasted={handleWasPasted}
      />
    </aside>
  );
}
