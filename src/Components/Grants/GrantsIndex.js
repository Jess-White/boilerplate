import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
  useMemo,
} from "react";
import Button from "../design/Button/Button";
import TextBox from "../design/TextBox/TextBox";
import AccordionTable from "../design/Accordion/AccordionTable/AccordionTable";
import { Link, useParams } from "react-router-dom";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useCurrentOrganizationContext } from "../../Contexts/currentOrganizationContext";
import { getAllGrants } from "../../Services/Organizations/GrantsService";
import formatDate from "../../Helpers/formatDate";
import countWords from "../../Helpers/countWords";
import SortableElement from "../Elements/SortableElement";
import GrantCopy from "../Grants/GrantCopy";
import "./GrantsIndex.css";

export default function GrantsIndex(props) {
  const [grants, setGrants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState([]);
  const [filteredGrantsByTabName, setFilteredGrantsByTabName] = useState([]);
  const [tabSelect, setTabSelect] = useState("All");
  const { currentOrganizationStore, organizationClient } =
    useCurrentOrganizationContext();
  // const totalWordCount = countTotalSectionsWords(grant?.sections);
  const currentOrganizationId =
    currentOrganizationStore.currentOrganization?.id;
  // const { grant_id: grantId } = useParams();
  const sensors = useSensors(
    useSensor(PointerSensor)
    // This breaks forms nested under drag and drop! The space key triggers
    // this sensor. TODO: Circle back to this!
    // useSensor(KeyboardSensor, {
    //   coordinateGetter: sortableKeyboardCoordinates,
    // })
  );

  const [searchFilters, setSearchFilters] = useState({
    title: "",
  });

  const columns = [
    { Header: "Deadline", accessor: "deadline" },
    { Header: "Title", accessor: "title" },
    { Header: "Funding Org", accessor: "funding_org_name" },
    { Header: "Purpose", accessor: "purpose" },
    { Header: "Date Created", accessor: "created_at" },
    { Header: "Last Modified", accessor: "updated_at" },
  ];

  const dropDownProps = {
    labelText: "Further Actions",
    placeholder: "Pick One",
    options: [
      { value: "MARK_AS_SUBMITTED", label: "Mark as Submitted" },
      { value: "MARK_AS_SUCCESSFUL", label: "Mark as Successful" },
      { value: "MARK_AS_COPY", label: "Mark as Copy" },
      { value: "ARCHIVE", label: "Archive" },
    ],
  };

  useEffect(() => {
    if (organizationClient)
      getAllGrants(organizationClient)
        .then((grants) => {
          setGrants(grants);
          setLoading(false);
        })
        .catch((error) => console.log(error));
  }, [organizationClient]);

  const filteredGrants = useMemo(() => {
    return grants.filter((grant) => {
      const matchesTitle = grant.title
        .toLowerCase()
        .includes(searchFilters.title.toLowerCase());
      return matchesTitle;
    });
  }, [grants, searchFilters]);

  useEffect(() => {
    if (organizationClient) {
      setFilteredGrantsByTabName(filteredGrants);
    }
  }, [organizationClient, filteredGrants]);

  const filterGrantsByTabName = (tabSelect) => {
    const filteredByTab = filteredGrants.filter((grant) => {
      if (tabSelect === "All") {
        return grant;
      } else if (tabSelect === "Archived") {
        return grant.archived === true;
      } else if (tabSelect === "Drafts") {
        return grant.submitted === false;
      } else if (tabSelect === "Successful") {
        return grant.successful === true;
      } else if (tabSelect === "Submitted") {
        return grant.submitted === true;
      }
      return grant;
    });
    setFilteredGrantsByTabName(filteredByTab);
  };

  if (errors.length) {
    console.error(errors);
    return <p>Error! {errors.map((error) => error.message)}</p>;
  } else if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="GrantsIndex">
      <section className="GrantsIndex__Overview">
        <header className="GrantsIndex__Header">
          <h1 className="GrantsIndex__HeaderText">All Grants</h1>
        </header>
      </section>
      <section className="GrantsIndex__Actions">
        {/* <div className="GrantsIndex__SearchBar"> */}
        <TextBox
          search
          onChange={(event) =>
            setSearchFilters({ ...searchFilters, text: event.target.value })
          }
          className="GrantsIndex__SearchInput"
        />
        <Button>
          <Link to={`/organizations/${currentOrganizationId}/grants-new/`}>
            Add New Grant
          </Link>
        </Button>
        {/* </div> */}
      </section>
      <section className="GrantsIndex__TableSection">
        <div className="GrantsIndex__TableTabs">
          <Button
            onClick={() => filterGrantsByTabName("All")}
            className="GrantsIndex__TableTabButton"
            variant="none"
          >
            All
          </Button>
          <Button
            onClick={() => filterGrantsByTabName("Drafts")}
            className="GrantsIndex__TableTabButton"
            variant="none"
          >
            Drafts
          </Button>
          <Button
            onClick={() => filterGrantsByTabName("Submitted")}
            className="GrantsIndex__TableTabButton"
            variant="none"
          >
            Submitted
          </Button>
          <Button
            onClick={() => filterGrantsByTabName("Successful")}
            className="GrantsIndex__TableTabButton"
            variant="none"
          >
            Successful
          </Button>
          <Button
            onClick={() => filterGrantsByTabName("Archived")}
            className="GrantsIndex__TableTabButton"
            variant="none"
          >
            Archived
          </Button>
        </div>
        <div className="GrantsIndex__Table">
          <AccordionTable
            dropDownProps={dropDownProps}
            columns={columns}
            data={filteredGrantsByTabName}
          />
        </div>
      </section>
    </div>
  );
}
