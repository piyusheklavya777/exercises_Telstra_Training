# DB Design
- Users are the fewest. There are generally too many more meetings than users, or than number of teams.
    So every query is tried to be initialted in users/teams collection. From there the meeting id is picked up.
    Hence three collections : USERS , TEAMS , MEETINGS

- USERS : Explaining the need for the fields
        "name": self-explanatory
        "email" : used as the unique field for searches in any API
        "password" : self-explanatory
        "teams" : GET Teams in teams view
        "meetings" : GET Meetings in calendar , meetings view.

- MEETINGS : Explaining the need for the fields
        "id": property will be auto created by POST. Used as unique key
        "title" : self-explanatory
        "MeetingDate" : self-explanatory
        "startTime" : self-explanatory
        "endTime" : self-explanatory. By default set to 2359hrs+startTime
        "description" : self-explanatory
        "attendees" : contains all the users' emails and @teamName . Keeping possibility of removing teams[unnecessary]
        "attendeesStrict" : contains strictly only emails. Necessary to remove one person who has excused themselves.

- TEAMS : Explaining the need for the fields
        "name" : self-explanatory
        "tagname": used as the unique field for searches in any API
        "description": self-explanatory
        "members": self-explanatory
        "meetings": useful to delete meeting entries from a user's 'meetings' property when they leave a team

# API end-points (ep)
- ep1 : Calendar : Show all meetings
    - From user object, [GET] user.meetings
    - [GET] all meetings from meetings collection and show
    IMPLEMENT AS A FUNCTION myMeetings(USER). CAN CALL IT FROM ep2 AS WELL

- ep2 : Meetings>Show Meetings : Show all meetings
    - From user object, pick user.meetings : In front-end sort as need be... myMeetings(USER)

- ep3 : Meetings>Show Meetings : excuse Myself From Meeting 
    - From user.meetings[] remove this meeting, [DELETE]
    - From meetings.attendeesstrict[] remove this user [DELETE]
    DUE TO ONLY REMOVAL FROM ATTENDEESSTRICT , DO NOT USE ATTENDEES FOR ANY OPERATIONS.
    MAKE THIS API CALL A FUNCTION (removemymeeting(meeting, user)) TO DO ALL IT NEEDS. PASS PARAMETERS OF USER object & MEETING object. Same function will be called from ep7

- ep4 : Meetings>Show Meetings : Add member to meeting
    - In new member's user object user.meetings[], add this meeting [UPDATE]
    - In the meeting's meetings.attendeesstrict[], add the user [UPDATE]

- ep5 : Meetings>Add meeting : Add new meeting
    - In Meetings collection add new meeting.
        - Pick any team object in attendees list and [GET] all it's members in meeting.attendeesstrict[]
    - A service function runs that adds this meeting to user objects of all people in this new created meeting's meeting.attendeesstrict[]. 

- ep6 : Teams : Show teams
    - [GET] user object's user.teams[] and forEach team of user, [GET] teams object and show

- ep7 : Teams : Leave team
  All three collections are to be updated.
    - [GET] team's team.meetings[] and forEach meeting run [ep3]'s removemymeeting(eachMeeting, user)
    - [UPDATE] team's team.members[] by deleting this user's email
    - [UPDATE] user's user.teams[] by deleting the teamname

- ep8 : Teams : Add Team
    - [POST] new team in teams collection
    - [UPDATE] forEach user in the new team, [UPDATE] user.teams[]

# FRONT-END views mapping with APIs
- calendar (monthly, daily)[ep1:GET]
- meetings : 2tabs
    - top(filter box), followed by meetings 
        - [ep2:GET all meetings With Filter],[ep3: UPDATE excuse Myself From Meeting], [ep4: UPDATE add member to     meeting]
    - add a meeting [ep5:POST new meeting] (auto-complete dropdown)
- teams : card view [ep6: leave team], + card [ep7:GET all teams]
    - "+"click: team creating form[ep8: POST create new team]

# fRONT END functions
- filter/search : The search / filter dropdown has options "ALL", "PAST", "TODAY", "UPCOMING". display in chronology
    - To match the search terms entered in the textarea 

