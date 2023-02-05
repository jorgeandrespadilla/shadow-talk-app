import BeatLoader from 'react-spinners/BeatLoader';
import './Loader.css';

type LoaderProps = {
    size?: number;
    color?: string;
};

function Loader({ size = 16, color = '#3b82f6' }: LoaderProps) {
    return <BeatLoader color={color} size={size} />;
}

export default Loader;
