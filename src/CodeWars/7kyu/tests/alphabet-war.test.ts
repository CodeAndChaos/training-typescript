import { alphabetWar} from '../alphabet-war';
 it("tests ", () => {
     expect(alphabetWar("z")).toEqual("Right side wins!");
     expect(alphabetWar("zdqmwpbs")).toEqual("Let's fight again!");
     expect(alphabetWar("zzzzs")).toEqual("Right side wins!");
     expect(alphabetWar("wwwwww")).toEqual("Left side wins!");
     expect(alphabetWar("bzqvzdvqpbe")).toEqual("Right side wins!");
});
