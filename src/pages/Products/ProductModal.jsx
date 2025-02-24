import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";
import { useState } from "react";

const ProductModal = ({ isOpen, onClose, product }) => {
  const [scrollBehavior, setScrollBehavior] = useState("inside");
  if (!product) return null;

  return (
    <Modal
      scrollBehavior={scrollBehavior}
      backdrop="opaque"
      classNames={{
        backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
      }}
      isOpen={isOpen}
      onOpenChange={onClose}
      className="bg-gray-100 shadow backdrop-blur-sm backdrop-brightness-50 rounded">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">{product.title}</ModalHeader>
        <ModalBody>
          <img src={product.image} alt={product.title} className="w-full h-52 object-cover rounded" />
          <p className="mt-2 text-gray-700">Price: <strong>${product.price}</strong></p>
          <p className="text-gray-600">{product.description || "No description available."}</p>
        </ModalBody>
        <ModalFooter>
          <Button variant="light" onPress={onClose} className="bg-red-300 cursor-pointer rounded">
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;
