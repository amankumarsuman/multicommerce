import { Drawer as WindmillDrawer } from "@windmill/react-ui";
import PropTypes from "prop-types";

const Drawer = ({ isOpen, onClose, children, ...props }) => {
  return (
    <WindmillDrawer isOpen={isOpen} onClose={onClose} {...props}>
      {children}
    </WindmillDrawer>
  );
};

Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Drawer;