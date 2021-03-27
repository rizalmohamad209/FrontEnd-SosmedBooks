import React, { Component } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            height: "100vh",
            overflow: "scroll initial",
          }}
        >
          <CDBSidebar
            textColor="black"
            backgroundColor="#ffffff"
            style={{ boxShadow: "1px 1px 10px gainsboro" }}
          >
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <a
                href="/"
                className="text-decoration-none"
                style={{ color: "inherit" }}
              >
                Profile
              </a>
            </CDBSidebarHeader>

            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu className="text-color">
                <NavLink exact to="/profile">
                  <CDBSidebarMenuItem>
                    <img
                      src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1616833903/Group_52_dhgbvf.png"
                      alt=""
                      style={{
                        height: "50px",
                        marginRight: "10px",
                      }}
                    />
                    Profile
                  </CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/books">
                  <CDBSidebarMenuItem>
                    <img
                      src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1616833903/Group_53_jqm4dw.png"
                      alt=""
                      style={{
                        height: "50px",
                        marginRight: "10px",
                      }}
                    />
                    Books
                  </CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/outofdate">
                  <CDBSidebarMenuItem>
                    <img
                      src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1616833903/Group_54_sw9qjd.png"
                      alt=""
                      style={{
                        height: "50px",
                        marginRight: "10px",
                      }}
                    />
                    Out Of Date
                  </CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/waitingborrow">
                  <CDBSidebarMenuItem>
                    <img
                      src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1616838931/Group_54_1_oekpef.png"
                      alt=""
                      style={{
                        height: "50px",
                        marginRight: "10px",
                      }}
                    />
                    Waiting Borrow
                  </CDBSidebarMenuItem>
                </NavLink>

                <NavLink exact to="/waiting">
                  <CDBSidebarMenuItem>
                    <img
                      src="https://res.cloudinary.com/dk4dgvu4w/image/upload/v1616838931/Group_54_2_qzvqx7.png"
                      alt=""
                      style={{
                        height: "50px",
                        marginRight: "10px",
                      }}
                    />
                    Waiting
                  </CDBSidebarMenuItem>
                </NavLink>
              </CDBSidebarMenu>
            </CDBSidebarContent>
          </CDBSidebar>
        </div>
      </div>
    );
  }
}
