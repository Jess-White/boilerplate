import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCurrentOrganizationContext } from "../Contexts/currentOrganizationContext";
import { getGrant } from "../Services/Organizations/GrantsService";
import formatDate from "../Helpers/formatDate";
import countSectionWords from "../Helpers/countSectionWords";
import SectionsShow from "./SectionsShow";
import "./GrantsFinalizeShow.css";

function countTotalSectionsWords(sections = []) {
  return sections?.reduce((total, section) => total + countSectionWords(section), 0);
}

export default function GrantsFinalizeShow(props) {
  const [grant, setGrant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState([]);
  const { currentOrganizationStore, organizationClient } =
    useCurrentOrganizationContext();
  const totalWordCount = countTotalSectionsWords(grant?.sections);
  const currentOrganizationId =
    currentOrganizationStore.currentOrganization?.id;
  const grantId = props.match.params.grant_id;

  useEffect(() => {
    if (!organizationClient) {
      return;
    }

    getGrant(organizationClient, grantId)
      .then((grant) => setGrant(grant))
      .catch((error) => setErrors([error]))
      .finally(() => setLoading(false));
  }, [organizationClient, grantId]);

  if (errors.length) {
    console.error(errors);
    return <p>Error! {errors.map((error) => error.message)}</p>;
  } else if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <Container className="GrantsFinalizeShow" fluid>
      <div className="GrantsFinalizeShow__TopBar">
        <Link to={`/organizations/${currentOrganizationId}/grants/`}>
          &lt; Back to All Grants
        </Link>
      </div>

      <section className="GrantsFinalizeShow__Header">
        <h1 className="GrantsFinalizeShow__Title">{grant.title}</h1>
        <dl className="GrantsFinalizeShow__Fields">
          <div className="GrantsFinalizeShow__Deadline">
            <dt>Deadline:&nbsp;</dt>
            <dd>{formatDate(grant.deadline)}</dd>
          </div>
          <dt>Funding Organization</dt>
          <dd>{grant.funding_org_name}</dd>
          <dt>Purpose</dt>
          <dd>{grant.purpose}</dd>
          <dt>RFP URL</dt>
          <dd>{grant.rfp_url}</dd>
        </dl>
      </section>

      <hr />

      <p className="GrantsFinalizeShow__TotalWordCount">
        Total word count: <span>{totalWordCount}</span>
      </p>

      <ol className="GrantsFinalizeShow__SectionList">
        {grant.sections?.map((section) => (
          <React.Fragment key={section.id}>
            <SectionsShow section={section} />
            <Button className="GrantsFinalizeShow__AddSection">
              Add Section
            </Button>
          </React.Fragment>
        ))}
      </ol>
    </Container>
  );
}
