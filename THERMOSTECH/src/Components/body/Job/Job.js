import React, { Component } from 'react';
import { ModalBody, Modal, Button, } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchJob } from '../../../redux/actionCreators';
import Loading from '../Loading';
import JobDetails from './Jobdetail';
import Joblist from './Joblist';


const mapStateToProps = state => {
    return {
        Job: state.Job,

    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchJob: () => dispatch(fetchJob()),
    }
}

class Job extends Component {
    state = {
        selectedJob: null,
        modalOpen: false
    }

    onJobSelect = Job => {
        this.setState({
            selectedJob: Job,
            modalOpen: !this.state.modalOpen

        });
    }
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }


    componentDidMount() {
        this.props.fetchJob();

    }

    render() {
        document.title = "Job";

        if (this.props.Job.isLoading) {
            return (
                <Loading />
            );
        }
        else {
            const Job = this.props.Job.Job.map(item => {
                return (
                    <Joblist
                        Job={item}
                        key={item.id}
                        JobSelect={() => this.onJobSelect(item)}
                    />
                );
            })

            let JobDetail = null;

            if (this.state.selectedJob != null) {
                JobDetail = <JobDetails
                    Job={this.state.selectedJob}
                />
            }
            
            return (
                <div style={{ overflow: "hidden" }}>
                    <div><br /><br /><br />
                        <div style={{ backgroundImage: "url('/assets/images/17.png')", height: "250px", backgroundSize: "cover", backgroundPosition: "center center" }}>
                            <p style={{ color: "#ea7826", fontSize: "30px", textAlign: "center", paddingTop: "100px" }}>
                                Our Motto
                            </p>
                        </div>
                        <br /><br /><br />
                        <p style={{ fontSize: "30px" }} align="center">
                            <em>
                                “Employee Happiness Generates Client Success.”
                            </em>
                        </p><br />
                        <p align="center">
                            The work culture at THERMOSTECH is fun and enjoyable. Our projects range from advanced
                            e-commerce systems and social networking <br />sites to web-based back office workflow solutions.
                            The flexibility during project development and design is key to the employee’s<br /> success on
                            creating a complete and outstanding final product. Sharing in that success gives a sense of
                            ownership and pride in the<br /> outcome.We are looking for talented professionals to join our
                            world class team.
                        </p>
                    </div>
                    <div className="row">
                        <div>
                            {Job}
                        </div>
                        <Modal isOpen={this.state.modalOpen} style={{ border: "none", marginRight: "100%" }}>
                            <ModalBody>
                                {JobDetail}
                                <Button color="warning" outline size='lg' onClick={this.toggleModal} style={{ width: "100px", marginTop: "20px" }}>
                                    Back
                                </Button>
                            </ModalBody>
                        </Modal>
                    </div>
                </div>
            );
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Job);