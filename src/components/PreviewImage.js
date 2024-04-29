import ImgsViewer from "react-images-viewer";
import PropTypes from 'prop-types'
const PreviewImages = (props) => {
    const { isShow, toggle, images, index, nextImg, preImg } = props
    return (
        <ImgsViewer
            imgs={images}
            currImg={index}
            isOpen={isShow}
            onClickPrev={preImg}
            onClickNext={nextImg}
            onClose={toggle}
        />
    )
}
PreviewImages.propTypes = {
    toggle: PropTypes.func.isRequired,
    nextImg:PropTypes.func.isRequired,
    preImg:PropTypes.func.isRequired,
    isShow: PropTypes.bool,
    images: PropTypes.arrayOf(PropTypes.object),
    index: PropTypes.number.isRequired
}
PreviewImages.defaultProps = {
    toggle: () => {},
    nextImg: () => {},
    preImg: () => {},
    isShow: false,
    images: []
}
export default PreviewImages;
