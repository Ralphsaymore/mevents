export class Event{
    

    constructor(
        public title:string,
        public description:string,
        public start_date:string,
        public end_date:string,
        public venue:string,
        public is_public:boolean
    ){
        this.title ='chrismas Party',
        this.description = "We love it";
        this.start_date ="10-11-2017";
        this.end_date = "23-11-2017";
        this.venue = "Murambi Gardens";
        this.is_public  = false;

    }
}