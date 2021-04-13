import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SectionsNew from "./SectionsNew";
import ReportsNew from "./ReportsNew";
import SectionsShow from "./SectionsShow";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";
import Modal from "./Elements/Modal";
import { useCurrentOrganizationContext } from "../Contexts/currentOrganizationContext";

//fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faTrashAlt);
library.add(faEdit);

export default function GrantsShow(props) {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [rfpUrl, setRfpUrl] = useState("");
  const [deadline, setDeadline] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [purpose, setPurpose] = useState("");
  const [organizationId, setOrganizationId] = useState("");
  const [fundingOrgId, setFundingOrgId] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [sections, setSections] = useState([]);
  const [reports, setReports] = useState([]);
  const [organizations, setOrganizations] = useState([]);
  const [fundingOrgs, setFundingOrgs] = useState([]);
  const [bios, setBios] = useState([]);
  const [boilerplates, setBoilerplates] = useState([]);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState([]);
  const history = useHistory();

  const [
    currentOrganizationStore,
    currentOrganizationDispatch,
  ] = useCurrentOrganizationContext();

  const [show, setShow] = useState(false);
  const handleClose = (event) => setShow(false);
  const handleShow = (event) => setShow(true);

  useEffect(() => {
    axios
      .get(
        `/api/organizations/${currentOrganizationStore.currentOrganizationInfo.id}/grants/${props.match.params.id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        }
      )
      .then((response) => {
        setId(response.data.id);
        setTitle(response.data.title);
        setRfpUrl(response.data.rfp_url);
        setDeadline(response.data.deadline);
        setSubmitted(response.data.submitted);
        setSuccessful(response.data.successful);
        setPurpose(response.data.purpose);
        setOrganizationId(response.data.organization_id);
        setFundingOrgId(response.data.funding_org_id);
        setSections(response.data.sections);
        setReports(response.data.reports);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(
        `/api/organizations/${currentOrganizationStore.currentOrganizationInfo.id}/boilerplates`,
        {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        }
      )
      .then((response) => {
        setBoilerplates(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(
        `/api/organizations/${currentOrganizationStore.currentOrganizationInfo.id}/bios`,
        {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        }
      )
      .then((response) => {
        setBios(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .patch(
        `/api/organizations/${currentOrganizationStore.currentOrganizationInfo.id}/grants/` +
          id,
        {
          title: title,
          rfp_url: rfpUrl,
          deadline: deadline,
          submitted: submitted,
          successful: successful,
          purpose: purpose,
          organization_id: organizationId,
          funding_org_id: fundingOrgId,
        },
        { headers: { Authorization: `Bearer ${localStorage.token}` } }
      )
      .then((response) => {
        handleClose();
      })
      .catch((error) => {
        console.log("grant update error", error);
      });
  };

  const addNewSections = (newSection) => {
    const newSections = [...sections];
    newSections.push(newSection);
    setSections(newSections);
  };

  const updateSections = (updatedSection) => {
    if (updatedSection.message) {
      const sections = sections.filter(
        (section) => section.id !== updatedSection.id
      );
      setSections(sections);
    } else {
      const sections = sections.map((section) => {
        if (section.id === updatedSection.id) {
          section = updatedSection;
        }
        return section;
      });
      setSections(sections);
    }
  };

  const updateNewReports = (newReport) => {
    const newReports = [...reports];
    newReports.push(newReport);
    setReports(newReports);
  };

  const handleGrantDelete = () => {
    axios
      .delete(
        `/api/organizations/${currentOrganizationStore.currentOrganizationInfo.id}/grants/` +
          id,
        {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        }
      )
      .then((response) => {
        if (response.data.message) {
          history.push(
            `/organizations/${currentOrganizationStore.currentOrganizationInfo.id}/grants`
          );
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const dragstartHandler = (event) => {
    event.dataTransfer.setData(
      "text/plain",
      event.target.getAttribute("data--section_id")
    );
  };

  const dragoverHandler = (event) => {
    event.preventDefault();
  };

  const dropHandler = (event) => {
    event.preventDefault();
    const sourceSectionId = event.dataTransfer.getData("text/plain");
    const closestSection = event.target.closest("div[data--section_id]");
    if (!closestSection) {
      return;
    }

    const closestSectionId = closestSection.getAttribute("data--section_id");

    const [sourceSection] = sections.filter((section) => {
      return section.id == sourceSectionId;
    });

    console.log(sourceSection, sourceSectionId, closestSection);

    const newSections = [];
    sections.forEach((section) => {
      if (section.id == closestSectionId) {
        newSections.push(sourceSection);
        if (sourceSectionId == closestSectionId) {
          return;
        }
      }
      if (section.id == sourceSectionId) {
        return;
      }

      newSections.push(section);
    });

    console.log(newSections);

    const newOrders = newSections.reduce((data, section, i) => {
      data[section.id] = i;
      return data;
    }, {});

    axios
      .post(
        `/api/organizations/${currentOrganizationStore.currentOrganizationInfo.id}/grants/` +
          id +
          "/actions/reordersections",
        newOrders,
        {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        }
      )
      .then((response) => {
        setSections(newSections);
      })
      .catch((error) => {
        console.log("grant update error", error);
      });
  };

  if (loading) {
    return (
      <div className="container">
        <h1>Loading....</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <Card>
        <Card.Header>
          <h3>{title}</h3>
          <FontAwesomeIcon
            icon={faEdit}
            style={{
              color: "black",
              fontSize: "1.5rem",
            }}
            onClick={handleShow}
          />
        </Card.Header>
        <Card.Body>
          <h4>Purpose: {purpose}</h4>
          <h4>RFP URL: {rfpUrl}</h4>
          <h4>Deadline: {deadline}</h4>
          <h4>Submitted: {submitted ? "yes" : "not yet"}</h4>
          <h4>Successful: {successful ? "yes" : "not yet"}</h4>

          {/* beginning of grant update */}
          <div>
            <div>
              <Modal onClose={handleClose} show={show}>
                <Card style={{ backgroundColor: "#09191b", color: "#fefefe" }}>
                  <Card.Body>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                          type="text"
                          value={title}
                          name="title"
                          // placeholder={this.state.title}
                          onChange={(event) => setTitle(event.target.value)}
                          required
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Purpose</Form.Label>
                        <Form.Control
                          type="text"
                          value={purpose}
                          name="purpose"
                          // placeholder={this.state.purpose}
                          onChange={(event) => setPurpose(event.target.value)}
                          required
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>RFP URL</Form.Label>
                        <Form.Control
                          type="text"
                          value={rfpUrl}
                          name="rfpUrl"
                          // placeholder={this.state.rfp_url}
                          onChange={(event) => setRfpUrl(event.target.value)}
                          required
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Deadline</Form.Label>
                        <Form.Control
                          type="datetime"
                          value={deadline}
                          name="deadline"
                          // placeholder={this.state.deadline}
                          onChange={(event) => setDeadline(event.target.value)}
                          required
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Submitted</Form.Label>
                        <Form.Check
                          type="checkbox"
                          name="submitted"
                          checked={submitted}
                          onChange={(event) =>
                            setSubmitted(event.target.checked)
                          }
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Successful</Form.Label>
                        <Form.Check
                          type="checkbox"
                          name="successful"
                          checked={successful}
                          onChange={(event) =>
                            setSuccessful(event.target.checked)
                          }
                        />
                      </Form.Group>
                      <div className="text-center">
                        <Button type="submit">Save Changes</Button>
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
              </Modal>
            </div>
          </div>
        </Card.Body>

        {/* end of grant update, beginning of sections and reports */}

        <Card.Body onDrop={dropHandler} onDragOver={dragoverHandler}>
          {sections.length ? (
            sections.map((section) => {
              return (
                <div
                  id={"section-" + section.id}
                  key={section.id}
                  data--section_id={section.id}
                  draggable="true"
                  onDragStart={dragstartHandler}
                >
                  <SectionsShow
                    grant_id={id}
                    section_id={section.id}
                    updateSections={updateSections}
                    bios={bios}
                    boilerplates={boilerplates}
                    organization_id={organizationId}
                  />
                </div>
              );
            })
          ) : (
            <h4>There are no sections yet.</h4>
          )}
          <SectionsNew
            sort_number={sections.length}
            grant_id={id}
            addNewSections={addNewSections}
          />
        </Card.Body>

        {/* reports */}

        <Card.Header>
          <h2>Reports:</h2>
        </Card.Header>
        <Card.Body>
          {reports.length ? (
            reports.map((report) => {
              return (
                <div key={report.id}>
                  <Link
                    to={`/organizations/${currentOrganizationStore.currentOrganizationInfo.id}/grants/${id}/reports/${report.id}`}
                  >
                    <h4>{report.title}</h4>
                  </Link>
                  <h4>{report.deadline}</h4>
                  <h4>{report.submitted}</h4>
                </div>
              );
            })
          ) : (
            <h4>There are no reports yet.</h4>
          )}
          <ReportsNew
            sort_number={sections.length}
            grant_id={id}
            grant_title={title}
            updateNewReports={updateNewReports}
          />
        </Card.Body>
      </Card>

      <Link
        to={`/organizations/${currentOrganizationStore.currentOrganizationInfo.id}/grants-finalize/${id}`}
      >
        <Button>Grant Finalize</Button>
      </Link>
      <Button variant="danger" onClick={handleGrantDelete}>
        Delete Grant
      </Button>
    </div>
  );
}
