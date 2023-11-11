
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center my-8 w-3/12 ">
            <p className="text-yellow-400 mb-3 ">--- {subHeading} ---</p>
            <h2 className="text-3xl border-y-4 uppercase py-2 ">{heading}</h2>
        </div>
    );
};

export default SectionTitle;