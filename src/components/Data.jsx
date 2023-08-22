import PropTypes from 'prop-types'

const Data = ({ dataTitle, dataFact }) => (
  <div className="flex md:flex-col lg:flex-col items-center md:items-start justify-between border-[1px] border-[#fff] border-opacity-[0.2] p-4 mt-2 md:w-3/8 lg:w-1/6">
    <h4 className="text-[11px] font-spartan font-bold leading-[25px] tracking-[1px] opacity-50 uppercase">
      {dataTitle}
    </h4>
    <h2 className="font-antonio text-[22px] md:text-[32px] lg:text-[40px] leading-[52px] tracking-[-1.5px] uppercase">
      {dataFact}
    </h2>
  </div>
)

export default Data

Data.propTypes = {
  dataTitle: PropTypes.string.isRequired,
  dataFact: PropTypes.string.isRequired,
}
