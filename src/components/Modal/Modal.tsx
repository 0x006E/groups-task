import { ReactComponent as Close } from "../../assets/icons/close.svg";
import "./Modal.scss";

export interface ModalProps {
  title: string;
  children: React.ReactNode;
  id: string;
}

function Modal(props: ModalProps) {
  const { title, children, id } = props;
  return (
    <div
      className="modal fade modal-bottom-sheet"
      id={id}
      tabIndex={-1}
      aria-labelledby="bottomSheetModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered  ">
        <div className="modal-content  p-3 ">
          <div className="modal-header p-0 border-0">
            <h5
              className="modal-title fs-18 fw-bold "
              id="bottomSheetModalLabel"
            >
              {title}
            </h5>
            <button
              type="button"
              className="btn btn-text p-0"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <Close />
            </button>
          </div>
          <div className="modal-body py-3 px-0 overflow-hidden container-fluid">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
