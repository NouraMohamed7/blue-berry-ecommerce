import './Info.css'

function Info() {
  return (
    <div className="Info">
      <div className="container flex justify-content-between">
        <p className="m-0 ">Flat 50% off Grocery shop.</p>
        <div className="flex gap-3">
          <div>Help</div>

          <div className=" position-relative py-2 ">
            <span >language</span>
            <div
              className="dropDown-menu"
              style={{ backgroundColor: "#fff", zIndex: "2" }}
            >
              <p>English</p>
              <p>Arbic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info