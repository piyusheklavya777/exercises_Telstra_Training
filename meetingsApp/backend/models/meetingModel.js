const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
    //one product's json
    title: {
        type: String,
        required: true
    },
    MeetingDate: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    attendees: {
        type: [String],
        required: true
    }
});

mongoose.model('Meeting', meetingSchema)

