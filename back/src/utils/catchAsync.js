
const cathAsync = (controller) => {
    return (req, res, nex) => {
        controller(req, res).cath((err) => next(err));
    }
};

export default cathAsync;