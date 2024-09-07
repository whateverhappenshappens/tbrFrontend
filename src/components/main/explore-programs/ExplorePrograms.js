import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../../../styles/components/ExplorePrograms.css";
import { useNavigate } from "react-router-dom";
import codeslayerImg from "../../../assets/ai-cloud-concept-with-robot-arm.png";
import webmonkImg from "../../../assets/Mask Group 5@2x.png";
import machinesterImg from "../../../assets/Mask Group 6@2x.png";
import iotImg from "../../../assets/Mask Group 7@2x.png";

const ExplorePrograms = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        _jsxs("div", { 
            className: "explore-programs", 
            children: [
                _jsxs("div", { 
                    className: "main", 
                    children: [
                        _jsxs("div", { 
                            className: "name", 
                            children: [
                                _jsx("h1", { 
                                    children: "Explore program by categories" 
                                }),
                                _jsx("p", { 
                                    children: "Get top on-demand courses from our list of courses" 
                                })
                            ] 
                        }),
                        _jsx("a", { 
                            className: "explore-btn", 
                            onClick: () => handleNavigation("/programs"), 
                            children: "View all" 
                        })
                    ] 
                }),
                _jsxs("div", { 
                    className: "programs", 
                    children: [
                        _jsxs("div", { 
                            className: "program-card one", 
                            onClick: () => handleNavigation("/course/codeslayer"), 
                            children: [
                                _jsx("div", { 
                                    className: "logo", 
                                    children: _jsx("img", { 
                                        src: codeslayerImg, 
                                        alt: "Codeslayer Logo" 
                                    }) 
                                }),
                                _jsxs("div", { 
                                    className: "details", 
                                    children: [
                                        _jsx("h2", { 
                                            children: "Codeslayer" 
                                        }),
                                        _jsx("p", { 
                                            children: "A Placement Preparation Program" 
                                        })
                                    ] 
                                })
                            ] 
                        }),
                        _jsxs("div", { 
                            className: "program-card two", 
                            onClick: () => handleNavigation("/course/webmonk"), 
                            children: [
                                _jsx("div", { 
                                    className: "logo", 
                                    children: _jsx("img", { 
                                        src: webmonkImg, 
                                        alt: "Webmonk Logo" 
                                    }) 
                                }),
                                _jsxs("div", { 
                                    className: "details", 
                                    children: [
                                        _jsx("h2", { 
                                            children: "Webmonk" 
                                        }),
                                        _jsx("p", { 
                                            children: "Web Development Program" 
                                        })
                                    ] 
                                })
                            ] 
                        }),
                        _jsxs("div", { 
                            className: "program-card three", 
                            onClick: () => handleNavigation("/course/machinester"), 
                            children: [
                                _jsx("div", { 
                                    className: "logo", 
                                    children: _jsx("img", { 
                                        src: machinesterImg, 
                                        alt: "Machinester Logo" 
                                    }) 
                                }),
                                _jsxs("div", { 
                                    className: "details", 
                                    children: [
                                        _jsx("h2", { 
                                            children: "Machinester" 
                                        }),
                                        _jsx("p", { 
                                            children: "Machine Learning Program" 
                                        })
                                    ] 
                                })
                            ] 
                        }),
                        _jsxs("div", { 
                            className: "program-card four", 
                            onClick: () => handleNavigation("/course/iot"), 
                            children: [
                                _jsx("div", { 
                                    className: "logo", 
                                    children: _jsx("img", { 
                                        src: iotImg, 
                                        alt: "IOT Logo" 
                                    }) 
                                }),
                                _jsxs("div", { 
                                    className: "details", 
                                    children: [
                                        _jsx("h2", { 
                                            children: "IOT" 
                                        }),
                                        _jsx("p", { 
                                            children: "Internet of Things Program" 
                                        })
                                    ] 
                                })
                            ] 
                        })
                    ] 
                })
            ] 
        })
    );
};

export default ExplorePrograms;
