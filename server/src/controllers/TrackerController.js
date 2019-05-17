import Config from "../constants/config";
import LabelUtil from "../utils/LabelUtil";

class TrackerController {
    constructor() {
        this.labelUtil = new LabelUtil();
        this.getLabelsInProject = this.getLabelsInProject.bind(this);
        this.getLabelByName = this.getLabelByName.bind(this);
    }

    async onTrackerEvent(req, res) {
        const trackerData = req.body;
        console.log(body);
        res.send("request received")
    }

    async getLabelsInProject(req, res) {
        
        const projectId = req.params.projectId;
        let labels = await this.labelUtil.getLabelsByProject(projectId);
        res.send(labels);
    }

    async getLabelByName(req, res) {
        const projectId = req.params.projectId;
        const queryName = req.params.queryName;
        let labels = await this.labelUtil.getLabelsByProject(projectId);
        let label = await this.labelUtil.getLabelByName(queryName, labels);
        res.send(label);
    }
}

export default TrackerController;