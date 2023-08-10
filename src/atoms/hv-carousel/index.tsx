import Carousel from "react-material-ui-carousel";
import "./styles.css";
export interface HVCarouselProps {
  carouselBuilder: (currentGroup: any) => React.Component;
  wrapperStyles?: any;
  data: [];
}
function HVCarousel(props: any) {
  const { wrapperStyles = {}, data = [] } = props;
  return (
    <Carousel autoPlay={false}>
      {data.map((currentGroup: any, i: number) => {
        return (
          <div
            className="container"
            style={{
              ...wrapperStyles,
            }}
          >
            {props.carouselBuilder(currentGroup)}
          </div>
        );
      })}
    </Carousel>
  );
}

export default HVCarousel;
