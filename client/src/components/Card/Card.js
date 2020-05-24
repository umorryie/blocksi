import React, { Component } from "react";
import images from "./images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCircle,
  faPlusCircle,
  faTrash,
  faPencilAlt,
  faPencilRuler,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
library.add(
  faEnvelope,
  faKey,
  faCircle,
  faPlusCircle,
  faTrash,
  faSync,
  faPencilAlt,
  faPencilRuler
);
const Card = ({
  name,
  address,
  surrname,
  phoneNumber,
  i,
  deleteFromContacts,
  windoww,
}) => {
  const lol = images.length;
  let stevec = i;
  if (stevec > lol - 1) {
    while (stevec > lol - 1) {
      stevec -= lol;
    }
  }

  return (
    <div className="zunanji">
      <div className="contactContainer1">
        <div className="containerInsideContact1">
          <div className="deletebtn">
            <FontAwesomeIcon
              className="plusCircle"
              size="2x"
              color="red"
              icon="trash"
              onClick={() => {
                var answer = window.confirm(
                  "Are you sure you want to delete this contact?"
                );
                if (answer) {
                  deleteFromContacts(surrname, name);
                }
              }}
            />
          </div>
          <div className="absolutno">
            <div className="imageOfuser1">
              <div
                className="slikaodUserja1"
                style={{ backgroundImage: `url(${images[stevec]})` }}
              ></div>
            </div>
            <div className="textContainer1234444">
              <div className="nameContainer9">
                <div className="nameCOntact9">
                  <div className="nameCOntact9123">{name}</div>
                  <FontAwesomeIcon
                    onClick={() =>
                      windoww("name", name, surrname, address, phoneNumber)
                    }
                    className="plusCircle1"
                    size="1x"
                    color="green"
                    icon="pencil-alt"
                  />
                </div>
              </div>
              <div className="surrnameContainer9">
                <div className="surrnameCOntact9">
                  <div className="nameCOntact9123">{surrname}</div>
                  <FontAwesomeIcon
                    onClick={() =>
                      windoww("surrname", name, surrname, address, phoneNumber)
                    }
                    className="plusCircle1"
                    size="1x"
                    color="green"
                    icon="pencil-alt"
                  />
                </div>
              </div>
              <div className="addressContainer9">
                <div className="addressnameCOntact9">
                  <div className="nameCOntact9123"> {address}</div>
                  <FontAwesomeIcon
                    onClick={() =>
                      windoww("address", name, surrname, address, phoneNumber)
                    }
                    className="plusCircle1"
                    size="1x"
                    color="green"
                    icon="pencil-alt"
                  />
                </div>
              </div>

              <div className="phoneNumberContainer9">
                <div className="phonenameCOntact9">
                  <div className="nameCOntact9123"> {phoneNumber}</div>
                  <FontAwesomeIcon
                    onClick={() =>
                      windoww(
                        "phoneNumber",
                        name,
                        surrname,
                        address,
                        phoneNumber
                      )
                    }
                    className="plusCircle1"
                    size="1x"
                    color="green"
                    icon="pencil-alt"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
