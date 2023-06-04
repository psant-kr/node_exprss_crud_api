const ex = require("express")
const Course = require("../models/course");
const router = ex.Router()

// creating the routers.

//get all the courses
router.get("/", async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        res.json(error)
    }
})

// get single courses

router.get("/:courseId", async (req, res) => {
    const courseId = req.params.courseId;

    try {
        const c = await Course.findById(courseId);
        res.json(c);
    } catch (error) {
        res.json(error);
    }
})

//create courses
router.post("/", async (req, res) => {
    // console.log(req.body)
    const course = await Course.create(req.body)
    res.json(course)
})

// delete courses

router.delete("/:courseId", async (req, res) => {
    console.log(req.params.courseId)
    try {
        await Course.findByIdAndRemove({ "_id": req.params.courseId });
        res.status(200).json({
            message: "done",
        });
    } catch (error) {
        res.json(error)
    }
})

//update courses

router.put("/:courseId", async (req, res) => {
    const courseId = req.params.courseId;
    try {
// we can also use find by is update one.
        const course = await Course.updateOne(
            {
                "_id": courseId
            },
            req.body
        );
res.json(course);
    } catch (error) {
res.json(error);
    }

})


module.exports = router