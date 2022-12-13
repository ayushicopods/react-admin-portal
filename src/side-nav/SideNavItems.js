import React, { useContext, useState } from "react";
import CounterChip from "../common/CounterChip";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CLICK_HERE, UNDER_SECTION } from "../constants/constants";
import { Link, useNavigate } from "react-router-dom";
import { headerContext } from "../context/header";

function SideNavItems({ heading, items }) {
  const { headerTitle, setHeaderTitle } = useContext(headerContext);
  function showChildItems(itemID) {
    // showing child items using recursive rendering
    activeElementID === itemID
      ? setActiveElementID(null)
      : setActiveElementID(itemID);
  }

  let [activeElementID, setActiveElementID] = useState("");
  let navigate = useNavigate();
  return (
    <div
      className="itemsContainer"
      tabIndex="0"
      aria-label={heading ? UNDER_SECTION + heading : ""}
    >
      {heading ? <p className="itemsHeading">{heading}</p> : null}
      {items?.map((res) => {
        return (
          <>
            {res.subMenuItems ? (
              <button
                className="itemsWrapper"
                aria-label={CLICK_HERE + "to navigate to" + res.label}
                tabIndex="0"
                onClick={() => {
                  res.subMenuItems && showChildItems(res.id);
                }}
                id={res.id}
              >
                {getInnerButtonContent(res, activeElementID)}
              </button>
            ) : (
              <Link
                to={`/${res.slug}`}
                className="itemsWrapper"
                aria-label={CLICK_HERE + "to navigate to" + res.label}
                tabIndex="0"
                id={res.id}
                onClick={() => {
                  setHeaderTitle(res.label);
                }}
              >
                {getInnerButtonContent(res, activeElementID)}
              </Link>
            )}
            {res.subMenuItems && res.id === activeElementID && (
              <div className="subitemsWrapper">
                <SideNavItems items={res.subMenuItems.items} />
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}

function getInnerButtonContent(res, activeElementID) {
  return (
    <>
      <div className={`itemsLabelwithIcon `}>
        {res.icon ? (
          <span>
            <res.icon className={res.itemsIconstyle}></res.icon>
          </span>
        ) : null}
        <span className="nav-text">
          <span>{res.label}</span>
          {res.subtext && (
            <span className="nav-text-small">Info text line</span>
          )}
        </span>
      </div>
      <div>
        {res.counter ? (
          <CounterChip counter={res.counter} />
        ) : (
          <div>
            {res.id === activeElementID ? (
              <ExpandMoreIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </div>
        )}
      </div>
    </>
  );
}
export default SideNavItems;
