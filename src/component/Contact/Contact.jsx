import { FaArrowRight } from 'react-icons/fa';
import './Contact.css'

function Contact() {
  return (
    <div className="Contact">
      <div className="pageHeading py-3 w-100">
        <div className="container flex justify-content-between">
          <b className="fs-5">Contact</b>
          <div className="flex gap-3">
            <span>Home</span> <FaArrowRight />
            <span>contact</span>
          </div>
        </div>
      </div>

      <div className="container-contact">
        <div className="row">
          <div className="col-lg-6 col-md-4 flex-dir-col gap-4">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Your First Name"
            />
            <input
              type="text"
              class="form-control"
              placeholder="Enter Your Last Name"
            />

            <input
              type="email"
              class="form-control"
              placeholder="Enter Your Email"
            />
            <input
              type="number"
              class="form-control"
              placeholder="Enter Your Phone Number"
            />
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              placeholder="please leave your comment here"
            ></textarea>
          </div>

          <div className="col-lg-6 col-md-4 rounded ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214.64710696907514!2d31.49668682721684!3d30.59578494791949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7f147e5fe7337%3A0x27ea7767255ccbe!2z2LTYsdmD2Kkg2KjYsdin2YHZiCDZhNiq2LnZhNmK2YUg2KfZhNio2LHZhdis2Kk!5e0!3m2!1sen!2seg!4v1747965332035!5m2!1sen!2seg"
              frameborder="0"
              width={500}
              height={500}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact