import "./Tools.css";
import { IoSettings } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useContext } from "react";
import { toolsContext } from "../../context/ToolsContext";
import lightimg from './../../assets/images/mode/light.png'
import darkimg from './../../assets/images/mode/dark.png'

function Tools() {
  const {
    handleChangeMainColor,
    changed_color,
    changed_mode,
    handleChangeMode,
  } = useContext(toolsContext);
  return (
    <div className="Tools">
      <a
        className="btnMood flex text-decoration-none "
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        <IoSettings className="icon" />
      </a>

      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header border-bottom border-secondary">
          <h5 className="offcanvas-title h3" id="offcanvasExampleLabel">
            Tools
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="selected-main-color border-bottom border-secondary ">
            <b>Choose Main Color :</b>
            <div className="row g-4 px-5  my-3">
              <div className="col-3">
                <div
                  className={changed_color == "one" && "active"}
                  onClick={(e) => handleChangeMainColor(e, "one")}
                >
                  {changed_color == "one" && (
                    <IoMdCheckmarkCircleOutline className="text-light fs-4" />
                  )}
                </div>
              </div>
              <div className="col-3">
                <div
                  className={changed_color == "two" && "active"}
                  onClick={(e) => handleChangeMainColor(e, "two")}
                >
                  {changed_color == "two" && (
                    <IoMdCheckmarkCircleOutline className="text-light fs-4" />
                  )}
                </div>
              </div>
              <div className="col-3">
                <div
                  className={changed_color == "three" && "active"}
                  onClick={(e) => handleChangeMainColor(e, "three")}
                >
                  {changed_color == "three" && (
                    <IoMdCheckmarkCircleOutline className="text-light fs-4" />
                  )}
                </div>
              </div>
              <div className="col-3">
                <div
                  className={changed_color == "four" && "active"}
                  onClick={(e) => handleChangeMainColor(e, "four")}
                >
                  {changed_color == "four" && (
                    <IoMdCheckmarkCircleOutline className="text-light fs-4" />
                  )}
                </div>
              </div>
              <div className="col-3">
                <div
                  className={changed_color == "five" && "active"}
                  onClick={(e) => handleChangeMainColor(e, "five")}
                >
                  {changed_color == "five" && (
                    <IoMdCheckmarkCircleOutline className="text-light fs-4" />
                  )}
                </div>
              </div>
              <div className="col-3">
                <div
                  className={changed_color == "six" && "active"}
                  onClick={(e) => handleChangeMainColor(e, "six")}
                >
                  {changed_color == "six" && (
                    <IoMdCheckmarkCircleOutline className="text-light fs-4" />
                  )}
                </div>
              </div>
              <div className="col-3">
                <div
                  className={changed_color == "seven" && "active"}
                  onClick={(e) => handleChangeMainColor(e, "seven")}
                >
                  {changed_color == "seven" && (
                    <IoMdCheckmarkCircleOutline className="text-light fs-4" />
                  )}
                </div>
              </div>
              <div className="col-3">
                <div
                  className={changed_color == "eight" && "active"}
                  onClick={(e) => handleChangeMainColor(e, "eight")}
                >
                  {changed_color == "eight" && (
                    <IoMdCheckmarkCircleOutline className="text-light fs-4" />
                  )}
                </div>
              </div>
              <div className="col-3">
                <div
                  className={changed_color == "nine" && "active"}
                  onClick={(e) => handleChangeMainColor(e, "nine")}
                >
                  {changed_color == "nine" && (
                    <IoMdCheckmarkCircleOutline className="text-light fs-4" />
                  )}
                </div>
              </div>
              <div className="col-3">
                <div
                  className={changed_color == "ten" && "active"}
                  onClick={(e) => handleChangeMainColor(e, "ten")}
                >
                  {changed_color == "ten" && (
                    <IoMdCheckmarkCircleOutline className="text-light fs-4" />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mode my-3 ">
            <b>Choose Mode :</b>
            <div className="row px-5  g-4 my-1 flex">
              <img
                src={lightimg}
                alt=""
                onClick={() => handleChangeMode("light")}
                className={changed_mode === "light" ? "active py-2" : ""}
              />

              <img
                src={darkimg}
                alt=""
                className={changed_mode === "dark" ? "active py-2" : ""}
                onClick={() => handleChangeMode("dark")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
