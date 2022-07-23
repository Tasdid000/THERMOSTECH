import React, { Component } from 'react';
import { ModalBody, Modal, Button,} from 'reactstrap';
import { connect } from 'react-redux';
import { fetchBlog } from '../../../redux/actionCreators';
import Loading from '../Loading';
import BlogDetails from './blogdetail';
import Bloglist from './bloglist';


const mapStateToProps = state => {
    return {
        Blog: state.Blog,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBlog: () => dispatch(fetchBlog()),
    }
}

class Blog extends Component {
    state = {
        selectedBlog: null,
        modalOpen: false
    }

    onBlogSelect = Blog => {
        this.setState({
            selectedBlog: Blog,
            modalOpen: !this.state.modalOpen

        });
    }
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }


    componentDidMount() {
        this.props.fetchBlog();

    }

    render() {
        document.title = "Blog";

        if (this.props.Blog.isLoading) {
            return (
                <Loading />
            );
        }
        else {
            const Blog = this.props.Blog.Blog.map(item => {
                return (
                    <Bloglist
                        Blog={item}
                        key={item.id}
                        BlogSelect={() => this.onBlogSelect(item)}
                    />
                );
            })

            let BlogDetail = null;

            if (this.state.selectedBlog != null) {
                BlogDetail = <BlogDetails
                    Blog={this.state.selectedBlog}
                />
            }

            return (
                <div style={{ overflow: "hidden" }}>
                    <div>
                        <br /><br /><br />
                        <div style={{ backgroundImage: "url('/assets/images/17.png')", height: "250px", backgroundSize: "cover", backgroundPosition: "center center" }}>
                            <p style={{ color: "#ea7826", fontSize: "30px", textAlign: "center", paddingTop: "100px" }}>
                                Blog
                            </p>

                        </div>
                        <div className="container">
                            <br /><br />
                            <p style={{ fontSize: "18px", textAlign: "center" }}>
                                Knowledge sharing had always been our goal.<br />
                                Explore the unique thoughts and experiences straight from the minds of our think tanks.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            {Blog}
                        </div>
                        <Modal isOpen={this.state.modalOpen} style={{ border: "none", marginRight: "100%" }}>
                            <ModalBody>
                                {BlogDetail}
                                <Button color="warning" outline size='lg' onClick={this.toggleModal} style={{ width:"100px",marginTop:"20px"}}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Blog);