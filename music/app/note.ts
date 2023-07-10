

class Note {
    str: String;
    minorSecond: Note;
    majorSecond: Note;
    minorThird: Note;
    majorThird: Note;
    perfectFourth: Note;
    tritone: Note;
    perfectFifth: Note;
    minorSixth: Note;
    majorSixth: Note;
    minorSeventh: Note;
    majorSeventh: Note;

    constructor(str: String) {
        this.str = str;
    }

    toString(): String {
        return this.str;
    }
}
