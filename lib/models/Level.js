class Level {

    constructor (index, name){
        // Level information
        this.index = index;
        this.name = name;

        // A level has multiple stages
        this.stages = []
        this.currentStageIndex = 0;
    }


    // The stages are build using a JSON text that comes from the API
    buildStages(stagesJSON) {

    }

    // Returns the current stage
    getCurrentStage() {
        return this.stages[this.currentStageIndex];
    }


    // Advance to the next stage
    this.nextStage = function() {

    }

    // Submits the prompt command. Returns true if answer is correct, false if answer is incorrect
    this.submitAnswer = function() {

        // TODO
        // if answer is incorrect, return false;

        // TODO
        // If answer is correct, proceed to next stage
        // this.nextStage();
        // return true;
    }
}