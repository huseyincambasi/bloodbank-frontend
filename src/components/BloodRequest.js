import { connect } from 'react-redux';

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
