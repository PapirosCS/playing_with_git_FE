class Level {

    constructor (jsonObject){
        // Level information
        this.index = "";
        this.name = "";

        // A level has multiple stages
        this.stages = []
        this.currentStageIndex = 0;

        Object.assign(this, jsonObject);
    }


    // The stages are build using a JSON text that comes from the API
    buildStages(stagesJSON) {

    }

    // Returns the current stage
    getCurrentStage() {
        return this.stages[this.currentStageIndex];
    }


    // Advance to the next stage
    nextStage() {
        this.currentStageIndex++;
        console.log(this.stages);
    }

    isLevelFinished() {
        return this.stages.length === this.currentStageIndex;
    }

    // Submits the prompt command. Returns true if answer is correct, false if answer is incorrect
    submitAnswer(text) {
        if(text === this.getCurrentStage().promptSolution) {
            this.nextStage();
            return true;
        } else {
            alert("Incorrect answer, keep trying!")
            return false;
        }
    }
}