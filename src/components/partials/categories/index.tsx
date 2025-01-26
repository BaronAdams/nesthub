import { propertyTypes } from '../../../data'
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './style.css'

function Category({ data }: { data: any }) {
    return (
        <div className="image-container">
            <LazyLoadImage
                style={{
                    borderRadius: '8px',
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }}
                src={data?.image}
                alt={data?.desc} />
            <div className="image-overlay"></div>
            {/* <div className="property-type-text">{data?.type}</div> */}
            <a href="property-detail.html" className="property-type-text text-lg text-left hover:text-blue-500 font-semibold ease-in-out duration-200">{data.desc}</a>
        </div>
    );
}

const Categories = () => {
    return (
        <ScrollMenu >
            {propertyTypes.map((el, index) => (
                <Category key={el.desc + "-" + index} data={el} />
            ))}
        </ScrollMenu>
    )
}

export default Categories