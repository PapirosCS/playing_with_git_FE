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
        return new Stage(this.stages[this.currentStageIndex]["display_message"],
            this.stages[this.currentStageIndex]["display_prompt"],
            this.stages[this.currentStageIndex]["image_filename"],
            this.stages[this.currentStageIndex]["prompt_solution"]);
    }


    // Advance to the next stage
    nextStage() {
        this.currentStageIndex++;
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