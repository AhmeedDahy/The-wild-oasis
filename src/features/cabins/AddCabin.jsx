import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabin;

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>Add Cabin</Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal((show) => !show)}>
//           <CreateCabinForm onClose={() => setIsOpenModal((show) => !show)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

// export default AddCabin;
