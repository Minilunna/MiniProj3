module.exports = {
    success: {
        s0: {
            code: "ExpertCreated",
            http: 201,
            type: "success"
        },
        s1: {
            http: 200,
            code: "ExpertUpdated",
            type: "success"
        },
        s2: {
            http: 200,
            code: "ExpertFound",
            type: "success"
        },
        s3: {
            http: 200,
            code: "ExpertDeleted",
            type: "success"
        },
        s4: {
            http: 204,
            code: "NoExperts",
            type: "success"
        }
    },
    error: {
        e0: {
            http: 404,
            code: "ExpertNotFound",
            type: "error"
        }
    }
}