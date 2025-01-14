import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Build muscle and improve endurance 
        with this high-intensity session combining compound lifts and isolation exercises for a full-body workout.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        This session focuses on building muscle strength and endurance
         through compound movements like squats, deadlifts, and bench presses, 
         combined with isolation exercises for specific muscle groups. Suitable for all fitness levels, it ensures a comprehensive full-body workout.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Strength Training Blast: </h4>
            <p>
            Build muscle and improve endurance with this high-intensity 
            session combining compound lifts and isolation exercises for a full-body workout.
            </p>
          </div>
          <div>
            <h4>Yoga Flow for Flexibility:</h4>
            <p>
            Improve flexibility and mindfulness with a 
            guided yoga session focused on deep stretches and breathwork.
            </p>
          </div>
          <div>
            <h4>Full-Body Circuit Training:</h4>
            <p>
            Rotate through stations targeting different muscle groups,
             ensuring a balanced and dynamic workout experience.
            </p>
          </div>
          <div>
            <h4>Outdoor Bootcamp Challenge:</h4>
            <p>
            Engage in functional training with sprints, 
            bodyweight exercises, and obstacle courses, all in the fresh air.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;