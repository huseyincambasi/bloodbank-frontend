import { connect } from 'react-redux';
import { Whole } from './Whole';
const BloodRequest = (props) => {
  return (
    props.site
  );
}

function mapStateToProps(state){
    return{
        site:state.site
    }
}

export default connect(mapStateToProps)(BloodRequest)
