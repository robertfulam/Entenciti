"use strict";

/* =========================================================
   ENTENCITI 8-Week Speed Program
   Updated with Core, Achilles Tendon, and Hip Abductor Work
========================================================= */

/* ================================
   Navigation
================================ */

const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.classList.toggle("is-open");

    navMenu.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("is-open");
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ================================
   Workout Data
================================ */

const workoutData = {
  weeks1_2: {
    label: "Weeks 1–2",
    focus: "Technique, posture, tendon strength, core control, and hip stability",
    days: {
      monday: {
        title: "Monday — Acceleration + Strength + Achilles",
        blocks: [
          {
            name: "Sprint Work",
            exercises: [
              {
                exercise: "10 m sprint",
                volume: "6 reps",
                load: "60–90 sec rest",
                note: "Run at 90–95% effort"
              },
              {
                exercise: "20 m sprint",
                volume: "4 reps",
                load: "2 min rest",
                note: "Stay powerful and relaxed"
              },
              {
                exercise: "Hill sprint or slight incline sprint",
                volume: "5 × 15 m",
                load: "2 min rest",
                note: "Focus on drive phase and forward projection"
              }
            ]
          },
          {
            name: "Strength Work",
            exercises: [
              {
                exercise: "Back squat",
                volume: "4 × 6",
                load: "35–45 kg",
                note: "Controlled depth and strong upward drive"
              },
              {
                exercise: "Romanian deadlift",
                volume: "3 × 8",
                load: "30–40 kg",
                note: "Hamstrings and hip extension"
              },
              {
                exercise: "Hip thrust",
                volume: "4 × 8",
                load: "40–50 kg",
                note: "Pause briefly at the top"
              },
              {
                exercise: "Bulgarian split squat",
                volume: "3 × 8 each leg",
                load: "8–12 kg dumbbells each hand",
                note: "Single-leg power and balance"
              }
            ]
          },
          {
            name: "Achilles Tendon + Calf Work",
            exercises: [
              {
                exercise: "Standing calf raise",
                volume: "4 × 12",
                load: "30–45 kg",
                note: "Full range; slow lower"
              },
              {
                exercise: "Isometric calf hold",
                volume: "3 × 30 sec each leg",
                load: "Bodyweight or 5–10 kg dumbbell",
                note: "Hold near top position to build tendon stiffness"
              },
              {
                exercise: "Straight-leg pogo jumps",
                volume: "3 × 20 contacts",
                load: "Bodyweight",
                note: "Quick, springy contacts"
              }
            ]
          },
          {
            name: "Core Finisher",
            exercises: [
              {
                exercise: "Front plank",
                volume: "3 × 45 sec",
                load: "Bodyweight",
                note: "Keep ribs down and hips level"
              },
              {
                exercise: "Dead bug",
                volume: "3 × 8 each side",
                load: "Bodyweight",
                note: "Control pelvis and breathing"
              }
            ]
          }
        ]
      },

      tuesday: {
        title: "Tuesday — Core + Mobility + Hip Abductors",
        blocks: [
          {
            name: "Core Stability",
            exercises: [
              {
                exercise: "Dead bug",
                volume: "3 × 10 each side",
                load: "Bodyweight",
                note: "Move slowly and keep lower back controlled"
              },
              {
                exercise: "Side plank",
                volume: "3 × 30 sec each side",
                load: "Bodyweight",
                note: "Targets lateral core and hip stability"
              },
              {
                exercise: "Pallof press",
                volume: "3 × 12 each side",
                load: "7.5–12.5 kg cable",
                note: "Anti-rotation core strength"
              }
            ]
          },
          {
            name: "Hip Abductor Training",
            exercises: [
              {
                exercise: "Banded lateral walk",
                volume: "3 × 12 steps each direction",
                load: "Light-medium resistance band",
                note: "Keep knees out and hips level"
              },
              {
                exercise: "Side-lying hip abduction",
                volume: "3 × 15 each leg",
                load: "Bodyweight or ankle weight",
                note: "Control the top position"
              },
              {
                exercise: "Single-leg glute bridge hold",
                volume: "3 × 25 sec each leg",
                load: "Bodyweight",
                note: "Pelvis must stay level"
              }
            ]
          },
          {
            name: "Mobility + Shin Work",
            exercises: [
              {
                exercise: "Copenhagen plank",
                volume: "3 × 20 sec each side",
                load: "Bodyweight",
                note: "Adductor and groin strength"
              },
              {
                exercise: "Tibialis raises",
                volume: "3 × 15",
                load: "Bodyweight",
                note: "Improve foot position before ground contact"
              },
              {
                exercise: "Hip flexor stretch",
                volume: "3 × 30 sec each side",
                load: "Bodyweight",
                note: "Do not over-arch lower back"
              },
              {
                exercise: "Hamstring stretch",
                volume: "3 × 30 sec each side",
                load: "Bodyweight",
                note: "Gentle stretch, not painful"
              }
            ]
          }
        ]
      },

      wednesday: {
        title: "Wednesday — Max Speed + Plyometrics + Achilles",
        blocks: [
          {
            name: "Sprint Work",
            exercises: [
              {
                exercise: "Flying 20 m sprint",
                volume: "5 reps",
                load: "3 min rest",
                note: "20 m build-up, then sprint hard for 20 m"
              },
              {
                exercise: "30 m build-up sprint",
                volume: "4 reps",
                load: "2 min rest",
                note: "Smooth acceleration into fast rhythm"
              },
              {
                exercise: "Stride sprint",
                volume: "4 × 60 m",
                load: "2 min rest",
                note: "Run at roughly 85% effort"
              }
            ]
          },
          {
            name: "Plyometrics + Achilles Reactivity",
            exercises: [
              {
                exercise: "Pogo jumps",
                volume: "4 × 20 contacts",
                load: "Bodyweight",
                note: "Quick ankle bounce"
              },
              {
                exercise: "Single-leg pogo",
                volume: "3 × 12 each leg",
                load: "Bodyweight",
                note: "Keep contacts short and controlled"
              },
              {
                exercise: "Broad jump",
                volume: "4 × 4",
                load: "Bodyweight",
                note: "Explode forward and land softly"
              },
              {
                exercise: "Single-leg bounds",
                volume: "3 × 10 each leg",
                load: "Bodyweight",
                note: "Elastic control and balance"
              },
              {
                exercise: "Box jump",
                volume: "4 × 4",
                load: "50–70 cm box",
                note: "Quality jumps only"
              }
            ]
          },
          {
            name: "Core Control",
            exercises: [
              {
                exercise: "Hollow body hold",
                volume: "3 × 25 sec",
                load: "Bodyweight",
                note: "Maintain strong trunk shape"
              },
              {
                exercise: "Bird dog",
                volume: "3 × 8 each side",
                load: "Bodyweight",
                note: "Control rotation"
              }
            ]
          }
        ]
      },

      friday: {
        title: "Friday — Strength + Power + Core",
        blocks: [
          {
            name: "Power Strength",
            exercises: [
              {
                exercise: "Trap bar deadlift or conventional deadlift",
                volume: "4 × 5",
                load: "45–60 kg",
                note: "Drive through the floor"
              },
              {
                exercise: "Front squat",
                volume: "3 × 6",
                load: "30–40 kg",
                note: "Keep torso upright"
              },
              {
                exercise: "Hang power clean",
                volume: "5 × 3",
                load: "20–30 kg",
                note: "Replace with 10–20 kg jump squats if needed"
              },
              {
                exercise: "Nordic hamstring curl",
                volume: "3 × 4–6",
                load: "Bodyweight",
                note: "Control the lowering phase"
              }
            ]
          },
          {
            name: "Calf + Achilles Strength",
            exercises: [
              {
                exercise: "Seated calf raise",
                volume: "4 × 12",
                load: "25–40 kg",
                note: "Soleus strength for sprinting"
              },
              {
                exercise: "Eccentric calf lower",
                volume: "3 × 8 each leg",
                load: "Bodyweight or 5–10 kg dumbbell",
                note: "3-second lower; use both legs to come up"
              }
            ]
          },
          {
            name: "Core + Carry Work",
            exercises: [
              {
                exercise: "Hanging knee raise",
                volume: "3 × 10",
                load: "Bodyweight",
                note: "Hip flexor and core control"
              },
              {
                exercise: "Farmer carry",
                volume: "4 × 25 m",
                load: "20–24 kg each hand",
                note: "Walk tall with tight core"
              },
              {
                exercise: "Side plank reach-through",
                volume: "3 × 8 each side",
                load: "Bodyweight",
                note: "Control rotation"
              }
            ]
          }
        ]
      },

      saturday: {
        title: "Saturday — Football Speed + Agility + Hip Abductors",
        blocks: [
          {
            name: "Field Work",
            exercises: [
              {
                exercise: "5 m acceleration sprint",
                volume: "6 reps",
                load: "45 sec rest",
                note: "Explosive first step"
              },
              {
                exercise: "10 m acceleration sprint",
                volume: "6 reps",
                load: "60 sec rest",
                note: "Drive low and powerful"
              },
              {
                exercise: "5-10-5 shuttle",
                volume: "5 reps",
                load: "2 min rest",
                note: "Sharp cuts and re-acceleration"
              },
              {
                exercise: "Zig-zag cone sprint",
                volume: "5 reps",
                load: "90 sec rest",
                note: "Keep hips low when changing direction"
              },
              {
                exercise: "Sprint with ball",
                volume: "6 × 20 m",
                load: "90 sec rest",
                note: "Maintain control while moving fast"
              }
            ]
          },
          {
            name: "Hip Abductor + Lateral Stability",
            exercises: [
              {
                exercise: "Lateral band walk",
                volume: "3 × 12 steps each direction",
                load: "Medium resistance band",
                note: "Glute medius activation"
              },
              {
                exercise: "Lateral lunge",
                volume: "3 × 8 each side",
                load: "Bodyweight or 8–12 kg dumbbell",
                note: "Control side-to-side strength"
              },
              {
                exercise: "Single-leg balance reach",
                volume: "3 × 6 each side",
                load: "Bodyweight",
                note: "Knee and pelvis control"
              }
            ]
          },
          {
            name: "Repeated Speed",
            exercises: [
              {
                exercise: "Repeated sprint",
                volume: "6 × 30 m",
                load: "30–45 sec rest",
                note: "Do not let technique collapse"
              }
            ]
          }
        ]
      }
    }
  },

  weeks3_4: {
    label: "Weeks 3–4",
    focus: "More force production, stronger starts, stronger core and hip control",
    days: {
      monday: {
        title: "Monday — Acceleration + Strength + Achilles",
        blocks: [
          {
            name: "Sprint Work",
            exercises: [
              {
                exercise: "10 m sprint",
                volume: "8 reps",
                load: "60–90 sec rest",
                note: "Sharper starts"
              },
              {
                exercise: "20 m sprint",
                volume: "5 reps",
                load: "2 min rest",
                note: "Full recovery between reps"
              },
              {
                exercise: "Hill sprint or slight incline sprint",
                volume: "5 × 15 m",
                load: "2 min rest",
                note: "Powerful forward projection"
              }
            ]
          },
          {
            name: "Gym Work",
            exercises: [
              {
                exercise: "Back squat",
                volume: "5 × 5",
                load: "45–55 kg",
                note: "Add 5 kg if form is clean"
              },
              {
                exercise: "Romanian deadlift",
                volume: "4 × 6",
                load: "40–50 kg",
                note: "Controlled eccentric"
              },
              {
                exercise: "Hip thrust",
                volume: "4 × 6",
                load: "50–65 kg",
                note: "Powerful lockout"
              },
              {
                exercise: "Bulgarian split squat",
                volume: "3 × 8 each leg",
                load: "10–14 kg dumbbells each hand",
                note: "Single-leg power"
              }
            ]
          },
          {
            name: "Achilles Tendon + Calf Work",
            exercises: [
              {
                exercise: "Standing calf raise",
                volume: "4 × 10",
                load: "40–55 kg",
                note: "Build ankle stiffness"
              },
              {
                exercise: "Isometric calf hold",
                volume: "4 × 30 sec each leg",
                load: "Bodyweight or 8–12 kg dumbbell",
                note: "Strong tendon position"
              },
              {
                exercise: "Straight-leg pogo jumps",
                volume: "4 × 20 contacts",
                load: "Bodyweight",
                note: "Short ground contact"
              }
            ]
          }
        ]
      },

      tuesday: {
        title: "Tuesday — Core + Mobility + Hip Abductors",
        blocks: [
          {
            name: "Core Stability",
            exercises: [
              {
                exercise: "Dead bug",
                volume: "3 × 10 each side",
                load: "Bodyweight",
                note: "Slow and controlled"
              },
              {
                exercise: "Side plank",
                volume: "3 × 35 sec each side",
                load: "Bodyweight",
                note: "Increase time slightly"
              },
              {
                exercise: "Pallof press",
                volume: "3 × 12 each side",
                load: "10–15 kg cable",
                note: "Anti-rotation strength"
              },
              {
                exercise: "Bear crawl",
                volume: "3 × 15 m",
                load: "Bodyweight",
                note: "Keep hips low and controlled"
              }
            ]
          },
          {
            name: "Hip Abductor Training",
            exercises: [
              {
                exercise: "Banded lateral walk",
                volume: "4 × 12 steps each direction",
                load: "Medium resistance band",
                note: "Do not let knees collapse inward"
              },
              {
                exercise: "Cable hip abduction",
                volume: "3 × 12 each leg",
                load: "5–10 kg",
                note: "Smooth controlled reps"
              },
              {
                exercise: "Side plank hip abduction",
                volume: "3 × 8 each side",
                load: "Bodyweight",
                note: "Advanced glute medius and core"
              }
            ]
          },
          {
            name: "Mobility + Shin Work",
            exercises: [
              {
                exercise: "Copenhagen plank",
                volume: "3 × 25 sec each side",
                load: "Bodyweight",
                note: "Adductor strength"
              },
              {
                exercise: "Tibialis raises",
                volume: "3 × 18",
                load: "Bodyweight",
                note: "Control each rep"
              }
            ]
          }
        ]
      },

      wednesday: {
        title: "Wednesday — Max Speed + Plyometrics + Achilles",
        blocks: [
          {
            name: "Sprint Work",
            exercises: [
              {
                exercise: "Flying 20 m sprint",
                volume: "6 reps",
                load: "3 min rest",
                note: "Stay relaxed at top speed"
              },
              {
                exercise: "30 m build-up sprint",
                volume: "4 reps",
                load: "2–3 min rest",
                note: "Smooth mechanics"
              },
              {
                exercise: "Stride sprint",
                volume: "4 × 60 m",
                load: "2 min rest",
                note: "85–90% effort"
              }
            ]
          },
          {
            name: "Plyometrics + Achilles Reactivity",
            exercises: [
              {
                exercise: "Pogo jumps",
                volume: "4 × 22 contacts",
                load: "Bodyweight",
                note: "Short ground contact"
              },
              {
                exercise: "Single-leg pogo",
                volume: "3 × 14 each leg",
                load: "Bodyweight",
                note: "Keep ankle stiff"
              },
              {
                exercise: "Broad jump",
                volume: "5 × 3",
                load: "Bodyweight",
                note: "Maximum horizontal distance"
              },
              {
                exercise: "Single-leg bounds",
                volume: "3 × 12 each leg",
                load: "Bodyweight",
                note: "Elastic and controlled"
              },
              {
                exercise: "Box jump",
                volume: "4 × 4",
                load: "50–70 cm box",
                note: "Land quietly"
              }
            ]
          }
        ]
      },

      friday: {
        title: "Friday — Strength + Power + Core",
        blocks: [
          {
            name: "Gym Work",
            exercises: [
              {
                exercise: "Deadlift",
                volume: "5 × 4",
                load: "55–70 kg",
                note: "Heavy but fast"
              },
              {
                exercise: "Front squat",
                volume: "4 × 5",
                load: "35–45 kg",
                note: "Upright torso"
              },
              {
                exercise: "Hang power clean",
                volume: "5 × 3",
                load: "25–35 kg",
                note: "Explosive pull"
              },
              {
                exercise: "Nordic curl",
                volume: "4 × 5",
                load: "Bodyweight",
                note: "Hamstring protection"
              }
            ]
          },
          {
            name: "Achilles + Core",
            exercises: [
              {
                exercise: "Seated calf raise",
                volume: "4 × 10",
                load: "35–50 kg",
                note: "Soleus strength"
              },
              {
                exercise: "Eccentric calf lower",
                volume: "3 × 10 each leg",
                load: "Bodyweight or 8–12 kg dumbbell",
                note: "3-second lower"
              },
              {
                exercise: "Farmer carry",
                volume: "4 × 30 m",
                load: "24–28 kg each hand",
                note: "Core stiffness"
              },
              {
                exercise: "Hanging knee raise",
                volume: "3 × 10",
                load: "Bodyweight",
                note: "Hip flexor and trunk control"
              }
            ]
          }
        ]
      },

      saturday: {
        title: "Saturday — Football Speed + Agility + Hip Abductors",
        blocks: [
          {
            name: "Field Work",
            exercises: [
              {
                exercise: "5 m reaction sprint",
                volume: "6 reps",
                load: "45 sec rest",
                note: "React to a clap, shout, or visual cue"
              },
              {
                exercise: "10 m acceleration sprint",
                volume: "7 reps",
                load: "60 sec rest",
                note: "Explosive drive"
              },
              {
                exercise: "5-10-5 shuttle",
                volume: "5 reps",
                load: "2 min rest",
                note: "Cut low and push hard"
              },
              {
                exercise: "Sprint with ball",
                volume: "7 × 20 m",
                load: "90 sec rest",
                note: "Fast but controlled"
              }
            ]
          },
          {
            name: "Hip Abductor + Lateral Stability",
            exercises: [
              {
                exercise: "Cable hip abduction",
                volume: "3 × 12 each leg",
                load: "5–10 kg",
                note: "Strengthen glute medius"
              },
              {
                exercise: "Lateral lunge",
                volume: "3 × 8 each side",
                load: "8–14 kg dumbbell",
                note: "Control lateral force"
              },
              {
                exercise: "Banded monster walk",
                volume: "3 × 10 forward + 10 backward",
                load: "Medium band",
                note: "Keep tension on band"
              }
            ]
          },
          {
            name: "Repeated Speed",
            exercises: [
              {
                exercise: "Repeated sprint",
                volume: "7 × 30 m",
                load: "35–45 sec rest",
                note: "Quality over exhaustion"
              }
            ]
          }
        ]
      }
    }
  },

  weeks5_6: {
    label: "Weeks 5–6",
    focus: "Flying sprints, elastic power, heavier strength, and stronger stiffness",
    days: {
      monday: {
        title: "Monday — Acceleration + Heavy Strength + Achilles",
        blocks: [
          {
            name: "Sprint Work",
            exercises: [
              {
                exercise: "10 m sprint",
                volume: "6 reps",
                load: "90 sec rest",
                note: "Explode from first step"
              },
              {
                exercise: "20 m sprint",
                volume: "5 reps",
                load: "2 min rest",
                note: "Strong drive phase"
              },
              {
                exercise: "30 m sprint",
                volume: "4 reps",
                load: "3 min rest",
                note: "Full quality only"
              },
              {
                exercise: "Resisted sprint or sled push",
                volume: "6 × 15 m",
                load: "6–12 kg added load",
                note: "Use light resistance, not grinding reps"
              }
            ]
          },
          {
            name: "Strength",
            exercises: [
              {
                exercise: "Back squat",
                volume: "5 × 4",
                load: "50–65 kg",
                note: "Force production"
              },
              {
                exercise: "Romanian deadlift",
                volume: "4 × 5",
                load: "45–60 kg",
                note: "Hamstring strength"
              },
              {
                exercise: "Hip thrust",
                volume: "5 × 5",
                load: "60–80 kg",
                note: "Explosive hip extension"
              },
              {
                exercise: "Bulgarian split squat",
                volume: "3 × 6 each leg",
                load: "12–16 kg dumbbells each hand",
                note: "Single-leg power"
              }
            ]
          },
          {
            name: "Achilles Tendon + Calf Work",
            exercises: [
              {
                exercise: "Standing calf raise",
                volume: "5 × 8",
                load: "50–65 kg",
                note: "Build elastic strength"
              },
              {
                exercise: "Heavy isometric calf hold",
                volume: "4 × 35 sec each leg",
                load: "10–16 kg dumbbell",
                note: "Strong tendon stiffness"
              },
              {
                exercise: "Low amplitude pogo",
                volume: "4 × 25 contacts",
                load: "Bodyweight",
                note: "Fast contacts, minimal knee bend"
              }
            ]
          }
        ]
      },

      tuesday: {
        title: "Tuesday — Core + Mobility + Hip Abductors",
        blocks: [
          {
            name: "Core Stability",
            exercises: [
              {
                exercise: "Dead bug",
                volume: "3 × 12 each side",
                load: "Bodyweight",
                note: "Control pelvis"
              },
              {
                exercise: "Side plank",
                volume: "3 × 40 sec each side",
                load: "Bodyweight",
                note: "Stay straight"
              },
              {
                exercise: "Pallof press",
                volume: "4 × 10 each side",
                load: "10–15 kg cable",
                note: "Anti-rotation strength"
              },
              {
                exercise: "Suitcase carry",
                volume: "3 × 25 m each side",
                load: "20–26 kg",
                note: "Anti-lateral flexion strength"
              }
            ]
          },
          {
            name: "Hip Abductor Training",
            exercises: [
              {
                exercise: "Cable hip abduction",
                volume: "4 × 10 each leg",
                load: "7.5–12.5 kg",
                note: "Smooth, controlled reps"
              },
              {
                exercise: "Side plank hip abduction",
                volume: "3 × 10 each side",
                load: "Bodyweight",
                note: "Core and glute medius together"
              },
              {
                exercise: "Single-leg squat to box",
                volume: "3 × 6 each leg",
                load: "Bodyweight or 5–8 kg",
                note: "Knee must track over toes"
              }
            ]
          },
          {
            name: "Mobility + Shin Work",
            exercises: [
              {
                exercise: "Copenhagen plank",
                volume: "3 × 25–30 sec each side",
                load: "Bodyweight",
                note: "Groin resilience"
              },
              {
                exercise: "Tibialis raises",
                volume: "4 × 15",
                load: "Bodyweight",
                note: "Improve foot position"
              }
            ]
          }
        ]
      },

      wednesday: {
        title: "Wednesday — Max Velocity + Elastic Power + Achilles",
        blocks: [
          {
            name: "Sprint Work",
            exercises: [
              {
                exercise: "Flying 20 m sprint",
                volume: "6 reps",
                load: "3–4 min rest",
                note: "Relaxed max speed"
              },
              {
                exercise: "Flying 30 m sprint",
                volume: "4 reps",
                load: "4 min rest",
                note: "Top speed development"
              },
              {
                exercise: "60 m sprint",
                volume: "3 reps",
                load: "4 min rest",
                note: "Run at 90% effort"
              }
            ]
          },
          {
            name: "Plyometrics + Achilles Reactivity",
            exercises: [
              {
                exercise: "Pogo jumps",
                volume: "4 × 25 contacts",
                load: "Bodyweight",
                note: "Short ground contact"
              },
              {
                exercise: "Single-leg pogo",
                volume: "4 × 12 each leg",
                load: "Bodyweight",
                note: "Elastic ankle stiffness"
              },
              {
                exercise: "Depth jump",
                volume: "4 × 3",
                load: "30–45 cm box",
                note: "Fast rebound"
              },
              {
                exercise: "Bounds",
                volume: "4 × 20 m",
                load: "Bodyweight",
                note: "Elastic stride power"
              }
            ]
          },
          {
            name: "Core Control",
            exercises: [
              {
                exercise: "Hollow body hold",
                volume: "3 × 30 sec",
                load: "Bodyweight",
                note: "Strong trunk position"
              },
              {
                exercise: "Plank shoulder taps",
                volume: "3 × 16 total",
                load: "Bodyweight",
                note: "Avoid hip rotation"
              }
            ]
          }
        ]
      },

      friday: {
        title: "Friday — Power Strength + Core",
        blocks: [
          {
            name: "Gym Work",
            exercises: [
              {
                exercise: "Deadlift",
                volume: "5 × 3",
                load: "65–85 kg",
                note: "Strong and fast"
              },
              {
                exercise: "Front squat",
                volume: "4 × 4",
                load: "40–55 kg",
                note: "Powerful upward drive"
              },
              {
                exercise: "Hang power clean",
                volume: "6 × 2",
                load: "30–40 kg",
                note: "Explosive reps"
              },
              {
                exercise: "Jump squat",
                volume: "4 × 4",
                load: "15–25 kg",
                note: "Move the bar fast"
              },
              {
                exercise: "Nordic curl",
                volume: "4 × 5",
                load: "Bodyweight",
                note: "Protect hamstrings"
              }
            ]
          },
          {
            name: "Achilles + Core",
            exercises: [
              {
                exercise: "Seated calf raise",
                volume: "5 × 8",
                load: "45–60 kg",
                note: "Soleus strength"
              },
              {
                exercise: "Eccentric calf lower",
                volume: "3 × 8 each leg",
                load: "10–16 kg dumbbell",
                note: "Slow controlled lowering"
              },
              {
                exercise: "Hanging leg raise",
                volume: "3 × 12",
                load: "Bodyweight",
                note: "Hip flexors and abs"
              },
              {
                exercise: "Farmer carry",
                volume: "4 × 30 m",
                load: "26–30 kg each hand",
                note: "Trunk stiffness"
              }
            ]
          }
        ]
      },

      saturday: {
        title: "Saturday — Football Speed + Hip Abductors",
        blocks: [
          {
            name: "Game-Speed Work",
            exercises: [
              {
                exercise: "5 m reaction sprint",
                volume: "8 reps",
                load: "45 sec rest",
                note: "React fast"
              },
              {
                exercise: "10 m sprint with turn",
                volume: "6 reps",
                load: "90 sec rest",
                note: "Re-accelerate after turning"
              },
              {
                exercise: "20 m curved sprint",
                volume: "6 reps",
                load: "90 sec rest",
                note: "Football-specific running angles"
              },
              {
                exercise: "5-10-5 shuttle",
                volume: "6 reps",
                load: "2 min rest",
                note: "Cut hard and stay low"
              },
              {
                exercise: "Sprint with ball",
                volume: "8 × 20 m",
                load: "90 sec rest",
                note: "Keep touch quality"
              }
            ]
          },
          {
            name: "Hip Abductor + Lateral Power",
            exercises: [
              {
                exercise: "Lateral bound",
                volume: "4 × 5 each side",
                load: "Bodyweight",
                note: "Explode side to side"
              },
              {
                exercise: "Cable hip abduction",
                volume: "3 × 10 each leg",
                load: "7.5–12.5 kg",
                note: "Glute medius strength"
              },
              {
                exercise: "Lateral lunge",
                volume: "3 × 8 each side",
                load: "10–16 kg dumbbell",
                note: "Strong side push"
              }
            ]
          },
          {
            name: "Repeated Speed",
            exercises: [
              {
                exercise: "Repeated sprint",
                volume: "2 sets of 5 × 30 m",
                load: "30 sec between reps, 4 min between sets",
                note: "Repeat high-quality sprint power"
              }
            ]
          }
        ]
      }
    }
  },

  weeks7_8: {
    label: "Weeks 7–8",
    focus: "Peak speed quality, lower volume, tendon sharpness, and stable mechanics",
    days: {
      monday: {
        title: "Monday — High-Quality Acceleration + Achilles",
        blocks: [
          {
            name: "Sprint Work",
            exercises: [
              {
                exercise: "10 m sprint",
                volume: "5 reps",
                load: "90 sec rest",
                note: "Explosive first step"
              },
              {
                exercise: "20 m sprint",
                volume: "4 reps",
                load: "2–3 min rest",
                note: "High quality only"
              },
              {
                exercise: "30 m sprint",
                volume: "4 reps",
                load: "3 min rest",
                note: "Stop if speed drops"
              },
              {
                exercise: "Sled sprint",
                volume: "4 × 15 m",
                load: "Light resistance",
                note: "Do not overload"
              }
            ]
          },
          {
            name: "Strength",
            exercises: [
              {
                exercise: "Back squat",
                volume: "4 × 3",
                load: "60–75 kg",
                note: "Low volume, high quality"
              },
              {
                exercise: "Romanian deadlift",
                volume: "3 × 4",
                load: "55–65 kg",
                note: "Hamstring strength"
              },
              {
                exercise: "Hip thrust",
                volume: "4 × 4",
                load: "70–90 kg",
                note: "Explosive lockout"
              },
              {
                exercise: "Bulgarian split squat",
                volume: "3 × 5 each leg",
                load: "14–18 kg dumbbells each hand",
                note: "Clean reps"
              }
            ]
          },
          {
            name: "Achilles Tendon Sharpness",
            exercises: [
              {
                exercise: "Standing calf raise",
                volume: "4 × 8",
                load: "55–70 kg",
                note: "Elastic strength"
              },
              {
                exercise: "Isometric calf hold",
                volume: "3 × 30 sec each leg",
                load: "10–16 kg dumbbell",
                note: "Maintain tendon stiffness"
              },
              {
                exercise: "Pogo jumps",
                volume: "3 × 20 contacts",
                load: "Bodyweight",
                note: "Fast, light contacts"
              }
            ]
          }
        ]
      },

      tuesday: {
        title: "Tuesday — Core + Mobility + Hip Abductors",
        blocks: [
          {
            name: "Core Stability",
            exercises: [
              {
                exercise: "Dead bug",
                volume: "3 × 10 each side",
                load: "Bodyweight",
                note: "Keep it easy and clean"
              },
              {
                exercise: "Side plank",
                volume: "3 × 35 sec each side",
                load: "Bodyweight",
                note: "Maintain stiffness"
              },
              {
                exercise: "Pallof press",
                volume: "3 × 10 each side",
                load: "10–12.5 kg cable",
                note: "Controlled anti-rotation"
              }
            ]
          },
          {
            name: "Hip Abductor Control",
            exercises: [
              {
                exercise: "Banded lateral walk",
                volume: "3 × 10 steps each direction",
                load: "Medium band",
                note: "Activation without fatigue"
              },
              {
                exercise: "Side plank hip abduction",
                volume: "3 × 8 each side",
                load: "Bodyweight",
                note: "Keep hips stacked"
              },
              {
                exercise: "Single-leg balance reach",
                volume: "3 × 5 each side",
                load: "Bodyweight",
                note: "Pelvis and knee control"
              }
            ]
          },
          {
            name: "Mobility + Shin Work",
            exercises: [
              {
                exercise: "Copenhagen plank",
                volume: "3 × 20 sec each side",
                load: "Bodyweight",
                note: "Do not overload groin"
              },
              {
                exercise: "Tibialis raises",
                volume: "3 × 15",
                load: "Bodyweight",
                note: "Foot position"
              }
            ]
          }
        ]
      },

      wednesday: {
        title: "Wednesday — Max Speed + Achilles Reactivity",
        blocks: [
          {
            name: "Sprint Work",
            exercises: [
              {
                exercise: "Flying 20 m sprint",
                volume: "4 reps",
                load: "4 min rest",
                note: "Max quality"
              },
              {
                exercise: "Flying 30 m sprint",
                volume: "4 reps",
                load: "4–5 min rest",
                note: "Top speed"
              },
              {
                exercise: "40 m sprint",
                volume: "3 reps",
                load: "4 min rest",
                note: "Full speed"
              },
              {
                exercise: "60 m sprint",
                volume: "2 reps",
                load: "5 min rest",
                note: "90–95% effort"
              }
            ]
          },
          {
            name: "Plyometrics + Achilles",
            exercises: [
              {
                exercise: "Pogo jumps",
                volume: "3 × 20 contacts",
                load: "Bodyweight",
                note: "Reactive bounce"
              },
              {
                exercise: "Single-leg pogo",
                volume: "3 × 10 each leg",
                load: "Bodyweight",
                note: "Fast but controlled"
              },
              {
                exercise: "Broad jump",
                volume: "4 × 3",
                load: "Bodyweight",
                note: "Power"
              },
              {
                exercise: "Depth jump",
                volume: "3 × 3",
                load: "30–45 cm box",
                note: "Quick ground contact"
              },
              {
                exercise: "Single-leg bounds",
                volume: "3 × 15 m each leg",
                load: "Bodyweight",
                note: "Elastic control"
              }
            ]
          }
        ]
      },

      friday: {
        title: "Friday — Explosive Strength + Core",
        blocks: [
          {
            name: "Gym Work",
            exercises: [
              {
                exercise: "Deadlift",
                volume: "4 × 3",
                load: "70–90 kg",
                note: "Strong and fast"
              },
              {
                exercise: "Front squat",
                volume: "3 × 3",
                load: "45–60 kg",
                note: "Explosive reps"
              },
              {
                exercise: "Hang power clean",
                volume: "5 × 2",
                load: "35–45 kg",
                note: "Sharp and technical"
              },
              {
                exercise: "Jump squat",
                volume: "4 × 3",
                load: "15–25 kg",
                note: "Maximum bar speed"
              },
              {
                exercise: "Nordic curl",
                volume: "3 × 4",
                load: "Bodyweight",
                note: "Hamstring protection"
              }
            ]
          },
          {
            name: "Achilles + Core",
            exercises: [
              {
                exercise: "Seated calf raise",
                volume: "4 × 8",
                load: "50–65 kg",
                note: "Soleus strength"
              },
              {
                exercise: "Eccentric calf lower",
                volume: "3 × 6 each leg",
                load: "10–16 kg dumbbell",
                note: "Controlled tendon loading"
              },
              {
                exercise: "Farmer carry",
                volume: "3 × 30 m",
                load: "26–32 kg each hand",
                note: "Trunk stiffness"
              },
              {
                exercise: "Hollow body hold",
                volume: "3 × 30 sec",
                load: "Bodyweight",
                note: "Maintain strong trunk position"
              }
            ]
          }
        ]
      },

      saturday: {
        title: "Saturday — Game Speed + Hip Abductors",
        blocks: [
          {
            name: "Football-Speed Work",
            exercises: [
              {
                exercise: "5 m reaction sprint",
                volume: "6 reps",
                load: "45 sec rest",
                note: "React quickly"
              },
              {
                exercise: "10 m acceleration",
                volume: "6 reps",
                load: "60–90 sec rest",
                note: "Explosive burst"
              },
              {
                exercise: "20 m sprint with ball",
                volume: "6 reps",
                load: "90 sec rest",
                note: "Control at speed"
              },
              {
                exercise: "1v1 burst drill",
                volume: "6 reps",
                load: "90 sec rest",
                note: "Game-like acceleration"
              },
              {
                exercise: "5-10-5 shuttle",
                volume: "4 reps",
                load: "2 min rest",
                note: "Sharp cutting"
              }
            ]
          },
          {
            name: "Hip Abductor + Lateral Control",
            exercises: [
              {
                exercise: "Lateral bound",
                volume: "3 × 5 each side",
                load: "Bodyweight",
                note: "Explosive but controlled"
              },
              {
                exercise: "Banded lateral walk",
                volume: "3 × 10 steps each direction",
                load: "Medium band",
                note: "Activation without fatigue"
              },
              {
                exercise: "Single-leg balance reach",
                volume: "3 × 5 each side",
                load: "Bodyweight",
                note: "Control knee and pelvis"
              }
            ]
          },
          {
            name: "Repeated Speed",
            exercises: [
              {
                exercise: "Repeated sprint",
                volume: "8 × 30 m",
                load: "45 sec rest",
                note: "Maintain quality"
              }
            ]
          }
        ]
      }
    }
  }
};

/* ================================
   Program Rendering
================================ */

const phaseSelect = document.getElementById("phaseSelect");
const daySelect = document.getElementById("daySelect");
const phaseLabel = document.getElementById("phaseLabel");
const workoutTitle = document.getElementById("workoutTitle");
const workoutFocus = document.getElementById("workoutFocus");
const workoutContent = document.getElementById("workoutContent");
const rosterWeekSelect = document.getElementById("rosterWeekSelect");
const rosterGrid = document.getElementById("rosterGrid");
const rosterProgressLabel = document.getElementById("rosterProgressLabel");
const rosterProgressBar = document.getElementById("rosterProgressBar");
const homeDemoClip = document.getElementById("homeDemoClip");
const upcomingPhase = document.getElementById("upcomingPhase");
const upcomingTitle = document.getElementById("upcomingTitle");
const upcomingFocus = document.getElementById("upcomingFocus");
const upcomingExercise = document.getElementById("upcomingExercise");
const upcomingEnvironment = document.getElementById("upcomingEnvironment");
const upcomingTimer = document.getElementById("upcomingTimer");
const upcomingProgress = document.querySelector("[data-video-progress]");
const homeCompleteButton = document.querySelector("[data-home-complete]");
const upcomingWorkoutLink = document.querySelector(".upcoming-actions a");
const exerciseDetailPage = document.getElementById("exerciseDetailPage");
const exerciseDetailContext = document.getElementById("exerciseDetailContext");
const exerciseDetailTitle = document.getElementById("exerciseDetailTitle");
const exerciseDetailSubtitle = document.getElementById("exerciseDetailSubtitle");
const exerciseDetailDemo = document.getElementById("exerciseDetailDemo");
const exerciseTimerLabel = document.getElementById("exerciseTimerLabel");
const exerciseTimerDisplay = document.getElementById("exerciseTimerDisplay");
const exerciseTimerProgress = document.getElementById("exerciseTimerProgress");
const exerciseSetLabel = document.getElementById("exerciseSetLabel");
const exerciseSetDots = document.getElementById("exerciseSetDots");
const exerciseDetailVolume = document.getElementById("exerciseDetailVolume");
const exerciseDetailLoad = document.getElementById("exerciseDetailLoad");
const exerciseDetailRest = document.getElementById("exerciseDetailRest");
const exerciseDetailCues = document.getElementById("exerciseDetailCues");
const exerciseDetailSteps = document.getElementById("exerciseDetailSteps");
const exerciseTimerStartButton = document.querySelector("[data-timer-start]");
const exerciseTimerResetButton = document.querySelector("[data-timer-reset]");
const exerciseSetCompleteButton = document.querySelector("[data-set-complete]");
const exercisePrevButton = document.querySelector("[data-exercise-prev]");
const exerciseNextButton = document.querySelector("[data-exercise-next]");
const demoToggleButton = document.querySelector("[data-demo-toggle]");
const demoSpeedButtons = document.querySelectorAll("[data-demo-speed]");
const exerciseCloseButtons = document.querySelectorAll("[data-exercise-close]");
const profileStatus = document.getElementById("profileStatus");
const authOpenButton = document.querySelector("[data-auth-open]");
const profileLogoutButton = document.querySelector("[data-profile-logout]");
const profilePlanSummary = document.getElementById("profilePlanSummary");
const authModal = document.getElementById("authModal");
const authTitle = document.getElementById("authTitle");
const authLead = document.getElementById("authLead");
const authMessage = document.getElementById("authMessage");
const authModeButtons = document.querySelectorAll("[data-auth-mode]");
const authViews = document.querySelectorAll("[data-auth-view]");
const authCloseButtons = document.querySelectorAll("[data-auth-close]");
const authSkipButtons = document.querySelectorAll("[data-auth-skip]");
const signupForm = document.querySelector("[data-signup-form]");
const loginForm = document.querySelector("[data-login-form]");
const setupForm = document.querySelector("[data-setup-form]");

const rosterDays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday"
];

const trainingDays = ["monday", "tuesday", "wednesday", "friday", "saturday"];
const dateDayKeys = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
];

const rosterDayMeta = {
  monday: {
    label: "Monday",
    environment: "Field + Gym",
    fallbackTitle: "Acceleration + Strength + Achilles",
    fallbackFocus: "Short sprints, strength work, calf and Achilles loading."
  },
  tuesday: {
    label: "Tuesday",
    environment: "Gym + Mobility",
    fallbackTitle: "Core + Mobility + Hip Abductors",
    fallbackFocus: "Core stability, hip control, groin balance, and mobility."
  },
  wednesday: {
    label: "Wednesday",
    environment: "Field + Plyo",
    fallbackTitle: "Max Speed + Plyometrics + Achilles",
    fallbackFocus: "Flying sprints, jumps, bounds, and ankle reactivity."
  },
  thursday: {
    label: "Thursday",
    environment: "Recovery",
    fallbackTitle: "Recovery + Light Core",
    fallbackFocus: "Mobility, breathing, easy ball work, and light trunk control."
  },
  friday: {
    label: "Friday",
    environment: "Gym",
    fallbackTitle: "Strength + Power + Core",
    fallbackFocus: "Deadlifts, front squats, power work, carries, and trunk stiffness."
  },
  saturday: {
    label: "Saturday",
    environment: "Field + Gym",
    fallbackTitle: "Football Speed + Abductors",
    fallbackFocus: "Reaction sprints, shuttles, curved runs, ball sprints, and lateral hips."
  },
  sunday: {
    label: "Sunday",
    environment: "Rest",
    fallbackTitle: "Rest",
    fallbackFocus: "Full recovery so the speed work can actually land."
  }
};

const rosterStoragePrefix = "entenciti-roster-v1";
const currentWeekStoragePrefix = "entenciti-current-week";
const usersStorageKey = "entenciti-users-v1";
const activeUserStorageKey = "entenciti-active-user-v1";
const authPromptSessionKey = "entenciti-auth-prompt-dismissed";
const homeClipDuration = 8000;

let upcomingSession = null;
let homeClipIndex = 0;
let homeClipInterval = null;
let homeTimerInterval = null;
let homeClipStartedAt = 0;
let activeExerciseContext = null;
let activeExerciseList = [];
let activeExerciseListIndex = 0;
let exerciseTimerDuration = 30;
let exerciseTimerRemaining = 30;
let exerciseTimerInterval = null;
let isExerciseTimerRunning = false;
let activeSetNumber = 1;
let exerciseTimerEndsAt = 0;
let activeExerciseGuide = null;
let activeUser = null;
let pendingProtectedAction = null;
let authIsRequired = false;
let hasOpenedAuthModal = false;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function readLocalStorage(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

function writeLocalStorage(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    // The app still works without persistence if storage is unavailable.
  }
}

function removeLocalStorage(key) {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    // Nothing to clear when storage is unavailable.
  }
}

function readSessionStorage(key) {
  try {
    return window.sessionStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

function writeSessionStorage(key, value) {
  try {
    window.sessionStorage.setItem(key, value);
  } catch (error) {
    // Session-only prompts can be repeated if storage is unavailable.
  }
}

function readJsonStorage(key, fallback) {
  const value = readLocalStorage(key);

  if (!value) return fallback;

  try {
    return JSON.parse(value);
  } catch (error) {
    return fallback;
  }
}

function writeJsonStorage(key, value) {
  writeLocalStorage(key, JSON.stringify(value));
}

function normalizeEmail(value) {
  return String(value).trim().toLowerCase();
}

function createProfileId(email) {
  return normalizeEmail(email).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function getUsers() {
  return readJsonStorage(usersStorageKey, {});
}

function saveUsers(users) {
  writeJsonStorage(usersStorageKey, users);
}

function getStoredActiveUser() {
  const activeEmail = normalizeEmail(readLocalStorage(activeUserStorageKey) || "");
  const users = getUsers();

  return activeEmail && users[activeEmail] ? users[activeEmail] : null;
}

function getProfileScope() {
  return activeUser ? `user-${activeUser.id}` : "guest";
}

function getCurrentWeekStorageKey() {
  return `${currentWeekStoragePrefix}-${getProfileScope()}`;
}

function hasTrainingProfile() {
  return Boolean(activeUser && activeUser.training && activeUser.training.completedAt);
}

function setAuthMessage(message, isError = false) {
  if (!authMessage) return;

  authMessage.textContent = message || "";
  authMessage.classList.toggle("is-error", Boolean(isError));
}

function renderProfilePlanSummary() {
  if (!profilePlanSummary) return;

  if (!hasTrainingProfile()) {
    profilePlanSummary.hidden = true;
    profilePlanSummary.innerHTML = "";
    return;
  }

  const training = activeUser.training;

  profilePlanSummary.hidden = false;
  profilePlanSummary.innerHTML = `
    <div>
      <span>Goal</span>
      <strong>${escapeHtml(training.goal)}</strong>
    </div>
    <div>
      <span>Commitment</span>
      <strong>${escapeHtml(training.commitment)}</strong>
    </div>
    <div>
      <span>Weekly Load</span>
      <strong>${escapeHtml(training.sessionsPerWeek)} sessions</strong>
    </div>
    <div>
      <span>Intensity</span>
      <strong>${escapeHtml(training.intensity)}</strong>
    </div>
  `;
}

function renderProfileState() {
  if (profileStatus) {
    profileStatus.textContent = activeUser ? activeUser.name : "Guest";
  }

  if (authOpenButton) {
    authOpenButton.textContent = activeUser ? "Profile" : "Sign up / Login";
  }

  if (profileLogoutButton) {
    profileLogoutButton.hidden = !activeUser;
  }

  renderProfilePlanSummary();
}

function refreshAfterProfileChange() {
  renderProfileState();
  renderWorkout();
  renderRoster();
  renderUpcomingProgram();
}

function setActiveUserByEmail(email) {
  const normalizedEmail = normalizeEmail(email);
  const users = getUsers();

  if (!normalizedEmail || !users[normalizedEmail]) {
    activeUser = null;
    removeLocalStorage(activeUserStorageKey);
  } else {
    activeUser = users[normalizedEmail];
    writeLocalStorage(activeUserStorageKey, normalizedEmail);
  }

  if (rosterWeekSelect) {
    rosterWeekSelect.value = String(
      clampWeek(readLocalStorage(getCurrentWeekStorageKey()) || "1")
    );
  }

  refreshAfterProfileChange();
}

function saveActiveUser(profile) {
  const users = getUsers();

  users[profile.email] = profile;
  saveUsers(users);
  setActiveUserByEmail(profile.email);
}

function setAuthMode(mode) {
  if (!authModal) return;

  const safeMode = mode === "setup" && !activeUser ? "signup" : mode;
  const tabsShell = authModeButtons.length ? authModeButtons[0].parentElement : null;

  authViews.forEach((view) => {
    view.hidden = view.dataset.authView !== safeMode;
  });

  authModeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.authMode === safeMode);
  });

  if (tabsShell) {
    tabsShell.hidden = safeMode === "setup";
  }

  if (safeMode === "setup") {
    if (authTitle) authTitle.textContent = "Set up your training";
    if (authLead) {
      authLead.textContent =
        "Answer a few questions so this profile can open the workout plan.";
    }
    populateSetupForm();
    return;
  }

  if (authTitle) authTitle.textContent = "Sign up or login";
  if (authLead) {
    authLead.textContent =
      "Browse freely now, then save your profile before opening a workout or plan.";
  }
}

function openAuthModal(mode = "signup", options = {}) {
  if (!authModal) return;

  authIsRequired = Boolean(options.required);
  hasOpenedAuthModal = true;
  authModal.hidden = false;
  authModal.classList.toggle("is-required", authIsRequired);
  document.body.classList.add("is-auth-open");
  setAuthMode(mode);
  setAuthMessage(options.message || "");

  const firstInput = authModal.querySelector("[data-auth-view]:not([hidden]) input, [data-auth-view]:not([hidden]) textarea, [data-auth-view]:not([hidden]) select");

  if (firstInput) {
    firstInput.focus();
  }
}

function closeAuthModal(rememberSkip = false) {
  if (!authModal) return;

  if (rememberSkip) {
    writeSessionStorage(authPromptSessionKey, "true");
  }

  pendingProtectedAction = null;
  authModal.hidden = true;
  authModal.classList.remove("is-required");
  authIsRequired = false;
  document.body.classList.remove("is-auth-open");
}

function finishAuthFlow() {
  const action = pendingProtectedAction;

  pendingProtectedAction = null;

  if (authModal) {
    authModal.hidden = true;
    authModal.classList.remove("is-required");
  }

  authIsRequired = false;
  document.body.classList.remove("is-auth-open");
  refreshAfterProfileChange();

  if (action) {
    action();
  }
}

function requireTrainingProfile(action) {
  if (hasTrainingProfile()) {
    if (action) action();
    return true;
  }

  pendingProtectedAction = typeof action === "function" ? action : null;
  openAuthModal(activeUser ? "setup" : "signup", {
    required: true,
    message: activeUser
      ? "Finish your training setup to open this plan."
      : "Create or login to a profile before opening this plan."
  });

  return false;
}

function collectTrainingSetup(form) {
  const formData = new FormData(form);
  const medicalCondition = String(formData.get("medicalCondition") || "").trim();

  return {
    goal: String(formData.get("goal") || "").trim(),
    commitment: String(formData.get("commitment") || ""),
    sessionsPerWeek: String(formData.get("sessionsPerWeek") || ""),
    experience: String(formData.get("experience") || ""),
    intensity: String(formData.get("intensity") || ""),
    age: String(formData.get("age") || ""),
    height: String(formData.get("height") || ""),
    weight: String(formData.get("weight") || ""),
    medicalCondition: medicalCondition || "None",
    completedAt: new Date().toISOString()
  };
}

function populateSetupForm() {
  if (!setupForm || !activeUser) return;

  const training = activeUser.training || {};

  Array.from(setupForm.elements).forEach((element) => {
    if (!element.name || !(element.name in training)) return;

    element.value = training[element.name];
  });
}

function openProgramSection() {
  const programSection = document.getElementById("program");

  if (programSection) {
    programSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function initializeAuth() {
  activeUser = getStoredActiveUser();
  renderProfileState();

  if (!activeUser && !readSessionStorage(authPromptSessionKey)) {
    window.setTimeout(() => {
      if (
        !activeUser &&
        !hasOpenedAuthModal &&
        authModal &&
        authModal.hidden &&
        !readSessionStorage(authPromptSessionKey)
      ) {
        openAuthModal("signup", { required: false });
      }
    }, 350);
  }
}

function clampWeek(week) {
  const parsedWeek = Number.parseInt(week, 10);

  if (Number.isNaN(parsedWeek)) return 1;

  return Math.min(8, Math.max(1, parsedWeek));
}

function getCurrentRosterWeek() {
  if (rosterWeekSelect) {
    return clampWeek(rosterWeekSelect.value);
  }

  return clampWeek(readLocalStorage(getCurrentWeekStorageKey()) || "1");
}

function setCurrentRosterWeek(week) {
  const safeWeek = clampWeek(week);

  writeLocalStorage(getCurrentWeekStorageKey(), String(safeWeek));

  if (rosterWeekSelect) {
    rosterWeekSelect.value = String(safeWeek);
  }

  return safeWeek;
}

function getPhaseKeyForWeek(week) {
  if (week <= 2) return "weeks1_2";
  if (week <= 4) return "weeks3_4";
  if (week <= 6) return "weeks5_6";

  return "weeks7_8";
}

function getRosterKey(week, dayKey) {
  return `${rosterStoragePrefix}-${getProfileScope()}-week-${clampWeek(week)}-${dayKey}`;
}

function isRosterComplete(week, dayKey) {
  return readLocalStorage(getRosterKey(week, dayKey)) === "true";
}

function setRosterComplete(week, dayKey, isComplete) {
  writeLocalStorage(getRosterKey(week, dayKey), String(Boolean(isComplete)));
}

function stripDayFromTitle(title) {
  return String(title).replace(/^[A-Za-z]+\s+[\u2013\u2014-]+\s+/, "");
}

function getSessionForWeekDay(week, dayKey) {
  const safeWeek = clampWeek(week);
  const phaseKey = getPhaseKeyForWeek(safeWeek);
  const phase = workoutData[phaseKey];
  const meta = rosterDayMeta[dayKey];
  const workout = phase && phase.days ? phase.days[dayKey] : null;

  return {
    week: safeWeek,
    phaseKey,
    phaseLabel: phase ? phase.label : `Week ${safeWeek}`,
    dayKey,
    dayLabel: meta.label,
    environment: meta.environment,
    isTraining: Boolean(workout),
    title: workout ? stripDayFromTitle(workout.title) : meta.fallbackTitle,
    focus: workout && phase ? phase.focus : meta.fallbackFocus,
    workout
  };
}

function createExerciseId(phaseKey, dayKey, blockIndex, exerciseIndex) {
  return `${phaseKey}__${dayKey}__${blockIndex}__${exerciseIndex}`;
}

function getExerciseContextsForWorkout(phaseKey, dayKey) {
  const phase = workoutData[phaseKey];
  const workout = phase && phase.days ? phase.days[dayKey] : null;
  const contexts = [];

  if (!phase || !workout) return contexts;

  workout.blocks.forEach((block, blockIndex) => {
    block.exercises.forEach((exercise, exerciseIndex) => {
      contexts.push({
        id: createExerciseId(phaseKey, dayKey, blockIndex, exerciseIndex),
        phaseKey,
        dayKey,
        phase,
        workout,
        block,
        blockIndex,
        exercise,
        exerciseIndex
      });
    });
  });

  return contexts;
}

function getExerciseContextById(id) {
  const [phaseKey, dayKey, blockIndexText, exerciseIndexText] = String(id).split("__");
  const blockIndex = Number.parseInt(blockIndexText, 10);
  const exerciseIndex = Number.parseInt(exerciseIndexText, 10);
  const phase = workoutData[phaseKey];
  const workout = phase && phase.days ? phase.days[dayKey] : null;
  const block = workout && workout.blocks ? workout.blocks[blockIndex] : null;
  const exercise = block && block.exercises ? block.exercises[exerciseIndex] : null;

  if (!phase || !workout || !block || !exercise) return null;

  const list = getExerciseContextsForWorkout(phaseKey, dayKey);
  const listIndex = list.findIndex((context) => context.id === id);

  return {
    id,
    phaseKey,
    dayKey,
    phase,
    workout,
    block,
    blockIndex,
    exercise,
    exerciseIndex,
    list,
    listIndex: listIndex === -1 ? 0 : listIndex
  };
}

function getDemoProfile(exerciseName) {
  const name = String(exerciseName).toLowerCase();

  if (/sprint with ball|ball sprint|with ball/.test(name)) {
    return { type: "field", motion: "dribble", label: "Ball" };
  }

  if (/5-10-5|shuttle|zig|curved|reaction|1v1|change of direction/.test(name)) {
    return { type: "field", motion: "cut", label: "Cut" };
  }

  if (/flying|stride|build-up|60 m|max velocity|max speed|top speed/.test(name)) {
    return { type: "field", motion: "sprint", label: "Sprint" };
  }

  if (/hill|resisted|acceleration|accelerat|5 m|10 m|20 m|30 m|sprint/.test(name)) {
    return { type: "field", motion: "accel", label: "Accel" };
  }

  if (/box jump|depth/.test(name)) {
    return { type: "plyo", motion: "box-jump", label: "Box" };
  }

  if (/broad|bound/.test(name)) {
    return { type: "plyo", motion: "bound", label: "Bound" };
  }

  if (/pogo|ankling/.test(name)) {
    return { type: "plyo", motion: "pogo", label: "Pogo" };
  }

  if (/jump/.test(name)) {
    return { type: "plyo", motion: "jump", label: "Jump" };
  }

  if (/tibialis/.test(name)) {
    return { type: "tendon", motion: "tibialis", label: "Tibialis" };
  }

  if (/eccentric calf/.test(name)) {
    return { type: "tendon", motion: "eccentric-calf", label: "Eccentric" };
  }

  if (/isometric calf|achilles/.test(name)) {
    return { type: "tendon", motion: "calf-hold", label: "Hold" };
  }

  if (/calf/.test(name)) {
    return { type: "tendon", motion: "calf-raise", label: "Calf" };
  }

  if (/banded lateral|lateral band|abduction|abductor/.test(name)) {
    return { type: "hip", motion: "lateral-band", label: "Band" };
  }

  if (/side-lying/.test(name)) {
    return { type: "hip", motion: "side-lying", label: "Side" };
  }

  if (/copenhagen/.test(name)) {
    return { type: "hip", motion: "copenhagen", label: "Groin" };
  }

  if (/balance reach/.test(name)) {
    return { type: "hip", motion: "balance-reach", label: "Reach" };
  }

  if (/lateral lunge/.test(name)) {
    return { type: "hip", motion: "lateral-lunge", label: "Lunge" };
  }

  if (/glute bridge/.test(name)) {
    return { type: "hip", motion: "bridge", label: "Bridge" };
  }

  if (/hip flexor|hamstring stretch/.test(name)) {
    return { type: "hip", motion: "mobility", label: "Mobility" };
  }

  if (/dead bug/.test(name)) {
    return { type: "core", motion: "dead-bug", label: "Bug" };
  }

  if (/side plank/.test(name)) {
    return { type: "core", motion: "side-plank", label: "Side" };
  }

  if (/front plank|plank|hollow/.test(name)) {
    return { type: "core", motion: "plank", label: "Plank" };
  }

  if (/pallof/.test(name)) {
    return { type: "core", motion: "pallof", label: "Pallof" };
  }

  if (/bird dog|bear crawl/.test(name)) {
    return { type: "core", motion: "crawl", label: "Crawl" };
  }

  if (/knee raise|leg raise|hanging/.test(name)) {
    return { type: "core", motion: "knee-raise", label: "Raise" };
  }

  if (/carry/.test(name)) {
    return { type: "core", motion: "carry", label: "Carry" };
  }

  if (/back squat|front squat|squat/.test(name)) {
    return { type: "gym", motion: "squat", label: "Squat" };
  }

  if (/deadlift|romanian|rdl/.test(name)) {
    return { type: "gym", motion: "hinge", label: "Hinge" };
  }

  if (/hip thrust/.test(name)) {
    return { type: "gym", motion: "hip-thrust", label: "Thrust" };
  }

  if (/bulgarian|split squat/.test(name)) {
    return { type: "gym", motion: "split-squat", label: "Split" };
  }

  if (/power clean|clean/.test(name)) {
    return { type: "gym", motion: "clean", label: "Clean" };
  }

  if (/nordic/.test(name)) {
    return { type: "gym", motion: "nordic", label: "Nordic" };
  }

  return { type: "gym", motion: "lift", label: "Lift" };
}

function getDemoPhaseLabels(profile) {
  const labels = {
    accel: ["Lean", "Push", "Rise"],
    sprint: ["Tall", "Cycle", "Relax"],
    cut: ["Plant", "Cut", "Drive"],
    dribble: ["Touch", "Drive", "Scan"],
    squat: ["Brace", "Depth", "Drive"],
    hinge: ["Hinge", "Grip", "Stand"],
    "hip-thrust": ["Set", "Bridge", "Lock"],
    "split-squat": ["Tall", "Drop", "Drive"],
    clean: ["Pull", "Snap", "Catch"],
    nordic: ["Kneel", "Lower", "Catch"],
    lift: ["Brace", "Control", "Drive"],
    pogo: ["Tall", "Stiff", "Spring"],
    bound: ["Load", "Flight", "Stick"],
    "box-jump": ["Load", "Jump", "Land"],
    jump: ["Load", "Explode", "Land"],
    "calf-raise": ["Flat", "Raise", "Control"],
    "calf-hold": ["Set", "Rise", "Hold"],
    "eccentric-calf": ["Rise", "Slow", "Lower"],
    tibialis: ["Lean", "Lift", "Lower"],
    plank: ["Brace", "Line", "Breathe"],
    "side-plank": ["Stack", "Lift", "Hold"],
    "dead-bug": ["Brace", "Reach", "Switch"],
    pallof: ["Stack", "Press", "Resist"],
    crawl: ["Stack", "Reach", "Control"],
    "knee-raise": ["Hang", "Lift", "Lower"],
    carry: ["Tall", "Walk", "Brace"],
    "lateral-band": ["Stack", "Step", "Return"],
    "side-lying": ["Stack", "Lift", "Lower"],
    copenhagen: ["Brace", "Lift", "Hold"],
    "balance-reach": ["Balance", "Reach", "Stand"],
    "lateral-lunge": ["Step", "Sink", "Push"],
    bridge: ["Set", "Bridge", "Hold"],
    mobility: ["Set", "Lengthen", "Breathe"]
  };

  return labels[profile.motion] || labels[profile.type] || labels.lift;
}

function createExerciseDemo(exerciseName, isLarge = false, isDetail = false) {
  const profile = getDemoProfile(exerciseName);
  const safeExercise = escapeHtml(exerciseName);
  const sizeClass = isLarge ? " demo-clip--large" : "";
  const detailClass = isDetail ? " demo-clip--detail" : "";
  const phaseLabels = getDemoPhaseLabels(profile);

  return `
    <div
      class="demo-clip demo-clip--${profile.type} demo-motion--${profile.motion}${sizeClass}${detailClass}"
      role="img"
      aria-label="Realistic animated ${profile.label} demo for ${safeExercise}"
    >
      <span class="demo-sky"></span>
      <span class="demo-lane"></span>
      <span class="demo-ground"></span>
      <span class="demo-shadow"></span>
      <span class="demo-distance-line demo-distance-line-a"></span>
      <span class="demo-distance-line demo-distance-line-b"></span>
      <span class="demo-marker demo-marker-a"></span>
      <span class="demo-marker demo-marker-b"></span>
      <span class="demo-equipment demo-equipment-a"></span>
      <span class="demo-equipment demo-equipment-b"></span>
      <span class="demo-band"></span>
      <span class="demo-ball"></span>
      <span class="demo-footprint demo-footprint-a"></span>
      <span class="demo-footprint demo-footprint-b"></span>
      <span class="demo-athlete">
        <span class="demo-head"></span>
        <span class="demo-body"></span>
        <span class="demo-arm demo-arm-a"></span>
        <span class="demo-arm demo-arm-b"></span>
        <span class="demo-leg demo-leg-a"></span>
        <span class="demo-leg demo-leg-b"></span>
        <span class="demo-shoe demo-shoe-a"></span>
        <span class="demo-shoe demo-shoe-b"></span>
      </span>
      <span class="demo-phase demo-phase-a">${phaseLabels[0]}</span>
      <span class="demo-phase demo-phase-b">${phaseLabels[1]}</span>
      <span class="demo-phase demo-phase-c">${phaseLabels[2]}</span>
      <span class="demo-label">${profile.label}</span>
    </div>
  `;
}

function createWorkoutTable(exercises, context) {
  const tableRows = exercises
    .map((item, exerciseIndex) => {
      const exerciseId = createExerciseId(
        context.phaseKey,
        context.dayKey,
        context.blockIndex,
        exerciseIndex
      );

      return `
        <tr>
          <td>
            <button
              class="exercise-open-button"
              type="button"
              data-exercise-open="${exerciseId}"
            >
              ${escapeHtml(item.exercise)}
            </button>
          </td>
          <td>${escapeHtml(item.volume)}</td>
          <td>${escapeHtml(item.load)}</td>
          <td>${escapeHtml(item.note)}</td>
          <td>
            <button
              class="demo-open-button"
              type="button"
              data-exercise-open="${exerciseId}"
              aria-label="Open ${escapeHtml(item.exercise)} workout detail"
            >
              ${createExerciseDemo(item.exercise)}
            </button>
          </td>
        </tr>
      `;
    })
    .join("");

  return `
    <div class="table-wrapper">
      <table class="workout-table">
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Sets / Reps</th>
            <th>Weight / Rest</th>
            <th>Coaching Note</th>
            <th>Demo</th>
          </tr>
        </thead>

        <tbody>
          ${tableRows}
        </tbody>
      </table>
    </div>
  `;
}

function renderWorkout() {
  const selectedPhase = phaseSelect.value;
  const selectedDay = daySelect.value;

  const phase = workoutData[selectedPhase];
  const workout = phase && phase.days ? phase.days[selectedDay] : null;

  if (!hasTrainingProfile()) {
    phaseLabel.textContent = "Profile Required";
    workoutTitle.textContent = "Set up your training profile";
    workoutFocus.textContent =
      "Sign up or login, answer your setup questions, then the full workout plan will open.";
    workoutContent.innerHTML = `
      <div class="profile-lock">
        <span>Locked Plan</span>
        <h4>Create your profile to open workouts.</h4>
        <p>
          Your profile stores your goal, commitment, weekly sessions, training
          background, intensity, body stats, and medical notes for this plan.
        </p>
        <button type="button" data-profile-required-open>Set Up Profile</button>
      </div>
    `;
    return;
  }

  if (!phase || !workout) {
    workoutContent.innerHTML = `
      <div class="empty-state">
        <h4>No workout available</h4>
        <p>Please select another day or phase.</p>
      </div>
    `;
    return;
  }

  phaseLabel.textContent = phase.label;
  workoutTitle.textContent = workout.title;
  workoutFocus.textContent = phase.focus;

  workoutContent.innerHTML = workout.blocks
    .map(
      (block, blockIndex) => `
        <article class="workout-block">
          <h4>${escapeHtml(block.name)}</h4>
          ${createWorkoutTable(block.exercises, {
            phaseKey: selectedPhase,
            dayKey: selectedDay,
            blockIndex
          })}
        </article>
      `
    )
    .join("");
}

function getFirstNumber(value) {
  const match = String(value).match(/\d+/);

  return match ? Number.parseInt(match[0], 10) : 0;
}

function extractSeconds(value) {
  const text = String(value).toLowerCase();
  const minuteMatch = text.match(/(\d+(?:\.\d+)?)\s*(?:min|minute)/);
  const secondMatch = text.match(/(\d+)\s*(?:sec|second)/);

  if (minuteMatch) {
    return Math.round(Number.parseFloat(minuteMatch[1]) * 60);
  }

  if (secondMatch) {
    return Number.parseInt(secondMatch[1], 10);
  }

  return 0;
}

function getSetCount(volume) {
  const text = String(volume).toLowerCase();
  const setsMatch = text.match(/(\d+)\s*sets/);
  const multiplyMatch = text.match(/(\d+)\s*(?:x|Ã—|×)/);
  const repsMatch = text.match(/(\d+)\s*reps/);

  if (setsMatch) return Number.parseInt(setsMatch[1], 10);
  if (multiplyMatch) return Number.parseInt(multiplyMatch[1], 10);
  if (repsMatch) return Number.parseInt(repsMatch[1], 10);

  return Math.max(1, getFirstNumber(volume) || 1);
}

function getExerciseGuide(item) {
  const profile = getDemoProfile(item.exercise);
  const name = item.exercise.toLowerCase();
  const timedVolume = extractSeconds(item.volume);
  const timedLoad = extractSeconds(item.load);
  const sets = getSetCount(item.volume);

  const guideByType = {
    field: {
      workSeconds: name.includes("60 m") ? 35 : name.includes("30 m") ? 25 : 18,
      restSeconds: timedLoad || 90,
      timerLabel: "Sprint Rep",
      cues: [
        "Start low with a forward shin angle.",
        "Push the ground back hard for the first three steps.",
        "Stay relaxed through your face, hands, and shoulders."
      ],
      steps: [
        "Set your stance and breathe out once.",
        "Drive hard for the planned distance.",
        "Walk back slowly and take the full rest before the next rep."
      ]
    },
    gym: {
      workSeconds: 45,
      restSeconds: timedLoad || 120,
      timerLabel: "Working Set",
      cues: [
        "Brace before the first rep and keep your ribs stacked.",
        "Control the lowering phase instead of dropping into the rep.",
        "Drive up with speed while keeping the same clean path."
      ],
      steps: [
        "Set your feet, grip, and brace.",
        "Move through the full set with clean reps.",
        "Rack or lower safely, then start your rest timer."
      ]
    },
    plyo: {
      workSeconds: 25,
      restSeconds: timedLoad || 90,
      timerLabel: "Explosive Set",
      cues: [
        "Attack the ground, then get off it quickly.",
        "Land quiet with knees tracking over toes.",
        "Stop the set if jump height or contact quality drops."
      ],
      steps: [
        "Stand tall and preload lightly.",
        "Jump or bounce with crisp contacts.",
        "Reset fully before the next explosive set."
      ]
    },
    tendon: {
      workSeconds: timedVolume || 35,
      restSeconds: timedLoad || 60,
      timerLabel: "Tendon Time",
      cues: [
        "Keep the ankle strong and aligned.",
        "Use a smooth lower and a powerful rise.",
        "Feel spring through the calf without sharp Achilles pain."
      ],
      steps: [
        "Set your foot tripod and stay tall.",
        "Hold, raise, or bounce for the timer.",
        "Rest fully so the next set stays elastic."
      ]
    },
    core: {
      workSeconds: timedVolume || 40,
      restSeconds: timedLoad || 45,
      timerLabel: "Core Hold",
      cues: [
        "Keep ribs down and pelvis controlled.",
        "Move slowly enough that your trunk does not twist.",
        "Breathe behind the brace instead of holding your breath."
      ],
      steps: [
        "Set the trunk position first.",
        "Complete the reps or hold until the timer ends.",
        "Rest, then repeat with the same body shape."
      ]
    },
    hip: {
      workSeconds: timedVolume || 35,
      restSeconds: timedLoad || 45,
      timerLabel: "Control Set",
      cues: [
        "Keep hips level and avoid leaning away from the work.",
        "Track the knee over the middle toes.",
        "Move with control before adding speed or load."
      ],
      steps: [
        "Set your band, cable, or stance.",
        "Move through the side-control pattern smoothly.",
        "Switch sides after the timer or prescribed reps."
      ]
    }
  };

  const guide = guideByType[profile.type] || guideByType.gym;

  return {
    ...guide,
    profile,
    sets,
    workSeconds: timedVolume || guide.workSeconds,
    restSeconds: timedLoad || guide.restSeconds
  };
}

function updateExerciseTimerUI() {
  if (!exerciseTimerDisplay || !exerciseTimerProgress) return;

  const progress = Math.min(
    100,
    Math.max(0, ((exerciseTimerDuration - exerciseTimerRemaining) / exerciseTimerDuration) * 100)
  );

  exerciseTimerDisplay.textContent = formatTimer(exerciseTimerRemaining);
  exerciseTimerProgress.style.width = `${progress}%`;
}

function pauseExerciseTimer() {
  if (exerciseTimerInterval) {
    window.clearInterval(exerciseTimerInterval);
    exerciseTimerInterval = null;
  }

  isExerciseTimerRunning = false;

  if (exerciseTimerStartButton) {
    exerciseTimerStartButton.textContent = "Start";
  }
}

function setExerciseTimer(seconds) {
  pauseExerciseTimer();

  exerciseTimerDuration = Math.max(1, seconds);
  exerciseTimerRemaining = exerciseTimerDuration;
  updateExerciseTimerUI();
}

function startExerciseTimer() {
  if (isExerciseTimerRunning || exerciseTimerRemaining <= 0) return;

  isExerciseTimerRunning = true;
  exerciseTimerEndsAt = Date.now() + exerciseTimerRemaining * 1000;

  if (exerciseTimerStartButton) {
    exerciseTimerStartButton.textContent = "Pause";
  }

  exerciseTimerInterval = window.setInterval(() => {
    exerciseTimerRemaining = Math.max(
      0,
      Math.ceil((exerciseTimerEndsAt - Date.now()) / 1000)
    );

    updateExerciseTimerUI();

    if (exerciseTimerRemaining === 0) {
      pauseExerciseTimer();
    }
  }, 200);
}

function toggleExerciseTimer() {
  if (isExerciseTimerRunning) {
    pauseExerciseTimer();
    return;
  }

  if (exerciseTimerRemaining === 0) {
    exerciseTimerRemaining = exerciseTimerDuration;
    updateExerciseTimerUI();
  }

  startExerciseTimer();
}

function renderSetDots() {
  if (!exerciseSetDots || !exerciseSetLabel || !activeExerciseGuide) return;

  const allSetsComplete = activeSetNumber > activeExerciseGuide.sets;

  exerciseSetLabel.textContent = allSetsComplete
    ? "All sets complete"
    : `Set ${activeSetNumber} of ${activeExerciseGuide.sets}`;

  if (exerciseSetCompleteButton) {
    exerciseSetCompleteButton.textContent = allSetsComplete ? "Restart Sets" : "Set Done";
  }

  exerciseSetDots.innerHTML = Array.from({ length: activeExerciseGuide.sets })
    .map((_, index) => {
      const isComplete = index + 1 < activeSetNumber || allSetsComplete;
      const isActive = index + 1 === activeSetNumber;

      return `<span class="${isComplete ? "is-complete" : ""}${isActive ? " is-active" : ""}"></span>`;
    })
    .join("");
}

function completeExerciseSet() {
  if (!activeExerciseGuide) return;

  activeSetNumber =
    activeSetNumber > activeExerciseGuide.sets
      ? 1
      : Math.min(activeExerciseGuide.sets + 1, activeSetNumber + 1);
  setExerciseTimer(activeExerciseGuide.workSeconds);
  renderSetDots();
}

function renderExerciseGuideList(target, items) {
  if (!target) return;

  target.innerHTML = items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function openExerciseDetail(context) {
  if (!context || !exerciseDetailPage) return;

  activeExerciseContext = context;
  activeExerciseList = context.list || getExerciseContextsForWorkout(context.phaseKey, context.dayKey);
  activeExerciseListIndex = context.listIndex || 0;
  activeExerciseGuide = getExerciseGuide(context.exercise);
  activeSetNumber = 1;

  const dayLabel = rosterDayMeta[context.dayKey]
    ? rosterDayMeta[context.dayKey].label
    : context.dayKey;

  if (exerciseDetailContext) {
    exerciseDetailContext.textContent = `${context.phase.label} - ${dayLabel} - ${context.block.name}`;
  }

  if (exerciseDetailTitle) {
    exerciseDetailTitle.textContent = context.exercise.exercise;
  }

  if (exerciseDetailSubtitle) {
    exerciseDetailSubtitle.textContent = context.exercise.note;
  }

  if (exerciseDetailDemo) {
    exerciseDetailDemo.innerHTML = createExerciseDemo(context.exercise.exercise, true, true);
  }

  if (exerciseTimerLabel) {
    exerciseTimerLabel.textContent = activeExerciseGuide.timerLabel;
  }

  if (exerciseDetailVolume) {
    exerciseDetailVolume.textContent = context.exercise.volume;
  }

  if (exerciseDetailLoad) {
    exerciseDetailLoad.textContent = context.exercise.load;
  }

  if (exerciseDetailRest) {
    exerciseDetailRest.textContent = formatTimer(activeExerciseGuide.restSeconds);
  }

  renderExerciseGuideList(exerciseDetailCues, activeExerciseGuide.cues);
  renderExerciseGuideList(exerciseDetailSteps, activeExerciseGuide.steps);
  renderSetDots();
  setExerciseTimer(activeExerciseGuide.workSeconds);

  exerciseDetailPage.hidden = false;
  exerciseDetailPage.classList.remove("is-demo-paused");
  exerciseDetailPage.dataset.demoSpeed = "normal";
  if (demoToggleButton) {
    demoToggleButton.textContent = "Pause Clip";
  }
  document.body.classList.add("is-detail-open");
  exerciseTimerStartButton && exerciseTimerStartButton.focus();
}

function openExerciseDetailById(id) {
  const context = getExerciseContextById(id);

  if (!context) return;

  openExerciseDetail(context);
}

function closeExerciseDetail() {
  if (!exerciseDetailPage) return;

  pauseExerciseTimer();
  exerciseDetailPage.hidden = true;
  document.body.classList.remove("is-detail-open");
}

function goToExercise(offset) {
  if (!activeExerciseList.length) return;

  const nextIndex =
    (activeExerciseListIndex + offset + activeExerciseList.length) %
    activeExerciseList.length;

  openExerciseDetail({
    ...activeExerciseList[nextIndex],
    list: activeExerciseList,
    listIndex: nextIndex
  });
}

initializeAuth();

if (authOpenButton) {
  authOpenButton.addEventListener("click", () => {
    openAuthModal(activeUser ? "setup" : "signup", { required: false });
  });
}

if (profileLogoutButton) {
  profileLogoutButton.addEventListener("click", () => {
    activeUser = null;
    removeLocalStorage(activeUserStorageKey);

    if (rosterWeekSelect) {
      rosterWeekSelect.value = String(
        clampWeek(readLocalStorage(getCurrentWeekStorageKey()) || "1")
      );
    }

    refreshAfterProfileChange();
  });
}

authModeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setAuthMode(button.dataset.authMode || "signup");
    setAuthMessage("");
  });
});

authCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    closeAuthModal(!authIsRequired);
  });
});

authSkipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    closeAuthModal(true);
  });
});

if (signupForm) {
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(signupForm);
    const email = normalizeEmail(formData.get("email"));
    const name = String(formData.get("name") || "").trim();
    const password = String(formData.get("password") || "");
    const users = getUsers();

    if (!email || !name || !password) {
      setAuthMessage("Fill in your name, email, and password.", true);
      return;
    }

    if (users[email]) {
      setAuthMessage("That profile already exists. Login instead.", true);
      setAuthMode("login");
      return;
    }

    activeUser = {
      id: createProfileId(email) || `profile-${Date.now()}`,
      name,
      email,
      password,
      training: null,
      createdAt: new Date().toISOString()
    };

    users[email] = activeUser;
    saveUsers(users);
    writeLocalStorage(activeUserStorageKey, email);
    renderProfileState();
    setAuthMode("setup");
    setAuthMessage("Profile created. Finish your training setup to proceed.");
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(loginForm);
    const email = normalizeEmail(formData.get("email"));
    const password = String(formData.get("password") || "");
    const users = getUsers();
    const user = users[email];

    if (!user || user.password !== password) {
      setAuthMessage("Email or password does not match a saved profile.", true);
      return;
    }

    activeUser = user;
    writeLocalStorage(activeUserStorageKey, email);
    refreshAfterProfileChange();

    if (hasTrainingProfile()) {
      finishAuthFlow();
      return;
    }

    setAuthMode("setup");
    setAuthMessage("Welcome back. Finish setup to open your plan.");
  });
}

if (setupForm) {
  setupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!activeUser) {
      setAuthMessage("Create or login to a profile first.", true);
      setAuthMode("signup");
      return;
    }

    activeUser = {
      ...activeUser,
      training: collectTrainingSetup(setupForm)
    };

    saveActiveUser(activeUser);
    finishAuthFlow();
  });
}

document.addEventListener(
  "click",
  (event) => {
    if (!(event.target instanceof Element)) return;

    const planLink = event.target.closest('a[href="#program"]');
    const setupButton = event.target.closest("[data-profile-required-open]");

    if (!planLink && !setupButton) return;

    if (hasTrainingProfile()) {
      if (setupButton) openProgramSection();
      return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();

    requireTrainingProfile(() => {
      if (planLink === upcomingWorkoutLink) {
        syncProgramToSession(upcomingSession);
      }

      openProgramSection();
    });
  },
  true
);

if (phaseSelect && daySelect) {
  phaseSelect.addEventListener("change", renderWorkout);
  daySelect.addEventListener("change", renderWorkout);

  renderWorkout();
}

if (workoutContent) {
  workoutContent.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-exercise-open]");

    if (!trigger) return;

    requireTrainingProfile(() => {
      openExerciseDetailById(trigger.dataset.exerciseOpen);
    });
  });
}

if (exerciseTimerStartButton) {
  exerciseTimerStartButton.addEventListener("click", toggleExerciseTimer);
}

if (exerciseTimerResetButton) {
  exerciseTimerResetButton.addEventListener("click", () => {
    if (!activeExerciseGuide) return;

    setExerciseTimer(activeExerciseGuide.workSeconds);
  });
}

if (exerciseSetCompleteButton) {
  exerciseSetCompleteButton.addEventListener("click", completeExerciseSet);
}

if (exercisePrevButton) {
  exercisePrevButton.addEventListener("click", () => goToExercise(-1));
}

if (exerciseNextButton) {
  exerciseNextButton.addEventListener("click", () => goToExercise(1));
}

exerciseCloseButtons.forEach((button) => {
  button.addEventListener("click", closeExerciseDetail);
});

if (demoToggleButton && exerciseDetailPage) {
  demoToggleButton.addEventListener("click", () => {
    const isPaused = exerciseDetailPage.classList.toggle("is-demo-paused");

    demoToggleButton.textContent = isPaused ? "Play Clip" : "Pause Clip";
  });
}

demoSpeedButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!exerciseDetailPage) return;

    exerciseDetailPage.dataset.demoSpeed = button.dataset.demoSpeed || "normal";
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || !exerciseDetailPage || exerciseDetailPage.hidden) return;

  closeExerciseDetail();
});

/* ================================
   Roster + Upcoming Program
================================ */

function getWorkoutExercises(workout) {
  const exercises = [];

  if (!workout || !workout.blocks) return exercises;

  workout.blocks.forEach((block) => {
    block.exercises.forEach((exercise) => {
      exercises.push(exercise);
    });
  });

  return exercises;
}

function getStartOfWeek(date) {
  const start = new Date(date);

  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - start.getDay());

  return start;
}

function getWeekDelta(baseDate, futureDate) {
  const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000;

  return Math.floor(
    (getStartOfWeek(futureDate) - getStartOfWeek(baseDate)) / millisecondsPerWeek
  );
}

function getNextTrainingSession() {
  const today = new Date();
  const currentWeek = getCurrentRosterWeek();

  for (let offset = 0; offset < 16; offset += 1) {
    const candidateDate = new Date(today);
    candidateDate.setDate(today.getDate() + offset);

    const dayKey = dateDayKeys[candidateDate.getDay()];

    if (!trainingDays.includes(dayKey)) continue;

    const candidateWeek = clampWeek(
      currentWeek + getWeekDelta(today, candidateDate)
    );

    if (isRosterComplete(candidateWeek, dayKey)) continue;

    return getSessionForWeekDay(candidateWeek, dayKey);
  }

  return getSessionForWeekDay(currentWeek, "monday");
}

function formatTimer(seconds) {
  return `00:${String(seconds).padStart(2, "0")}`;
}

function updateHomeTimer() {
  if (!upcomingTimer) return;

  const elapsed = Date.now() - homeClipStartedAt;
  const remaining = Math.max(0, Math.ceil((homeClipDuration - elapsed) / 1000));

  upcomingTimer.textContent = formatTimer(remaining);
}

function restartProgressBar() {
  if (!upcomingProgress) return;

  upcomingProgress.style.animation = "none";
  upcomingProgress.style.width = "0%";
  upcomingProgress.offsetHeight;
  upcomingProgress.style.animation = `clipProgress ${homeClipDuration}ms linear forwards`;
}

function renderHomeClip(exercises) {
  if (!homeDemoClip || exercises.length === 0) return;

  const exercise = exercises[homeClipIndex % exercises.length];

  homeClipStartedAt = Date.now();
  homeDemoClip.innerHTML = createExerciseDemo(exercise.exercise, true);

  if (upcomingExercise) {
    upcomingExercise.textContent = exercise.exercise;
  }

  restartProgressBar();
  updateHomeTimer();
}

function stopHomeClipRotation() {
  if (homeClipInterval) {
    window.clearInterval(homeClipInterval);
    homeClipInterval = null;
  }

  if (homeTimerInterval) {
    window.clearInterval(homeTimerInterval);
    homeTimerInterval = null;
  }
}

function startHomeClipRotation(exercises) {
  stopHomeClipRotation();

  if (!homeDemoClip || exercises.length === 0) return;

  homeClipIndex = 0;
  renderHomeClip(exercises);

  homeClipInterval = window.setInterval(() => {
    homeClipIndex = (homeClipIndex + 1) % exercises.length;
    renderHomeClip(exercises);
  }, homeClipDuration);

  homeTimerInterval = window.setInterval(updateHomeTimer, 250);
}

function syncProgramToSession(session) {
  if (!session || !session.isTraining || !phaseSelect || !daySelect) return;

  phaseSelect.value = session.phaseKey;
  daySelect.value = session.dayKey;
  renderWorkout();
}

function renderUpcomingProgram() {
  if (!homeDemoClip) return;

  upcomingSession = getNextTrainingSession();

  if (upcomingPhase) {
    upcomingPhase.textContent = `Week ${upcomingSession.week} - ${upcomingSession.dayLabel}`;
  }

  if (upcomingTitle) {
    upcomingTitle.textContent = upcomingSession.title;
  }

  if (upcomingFocus) {
    upcomingFocus.textContent = upcomingSession.focus;
  }

  if (upcomingEnvironment) {
    upcomingEnvironment.textContent = upcomingSession.environment;
  }

  startHomeClipRotation(getWorkoutExercises(upcomingSession.workout));
}

function updateRosterProgress(week) {
  const completedSessions = trainingDays.filter((dayKey) =>
    isRosterComplete(week, dayKey)
  ).length;
  const totalSessions = trainingDays.length;
  const progress = Math.round((completedSessions / totalSessions) * 100);

  if (rosterProgressLabel) {
    rosterProgressLabel.textContent = `${completedSessions} of ${totalSessions} sessions complete`;
  }

  if (rosterProgressBar) {
    rosterProgressBar.style.width = `${progress}%`;
  }
}

function renderRoster() {
  if (!rosterGrid || !rosterWeekSelect) return;

  const week = getCurrentRosterWeek();

  rosterGrid.innerHTML = rosterDays
    .map((dayKey) => {
      const session = getSessionForWeekDay(week, dayKey);
      const isComplete = isRosterComplete(week, dayKey);
      const checkboxId = `roster-${week}-${dayKey}`;
      const sessionType = session.isTraining
        ? "Training"
        : dayKey === "sunday"
          ? "Rest"
          : "Recovery";

      return `
        <article class="roster-card${session.isTraining ? "" : " roster-card--rest"}${isComplete ? " is-complete" : ""}">
          <label class="roster-card-label" for="${checkboxId}">
            <input
              id="${checkboxId}"
              type="checkbox"
              data-roster-day="${dayKey}"
              ${isComplete ? "checked" : ""}
            />
            <span class="roster-check" aria-hidden="true"></span>
            <span class="roster-card-copy">
              <span class="roster-day-row">
                <span>${escapeHtml(session.dayLabel)}</span>
                <em>${escapeHtml(sessionType)}</em>
              </span>
              <strong>${escapeHtml(session.title)}</strong>
              <span>${escapeHtml(session.environment)}</span>
            </span>
          </label>
        </article>
      `;
    })
    .join("");

  rosterGrid.querySelectorAll("[data-roster-day]").forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      const dayKey = event.currentTarget.dataset.rosterDay;
      const desiredChecked = event.currentTarget.checked;

      if (!hasTrainingProfile()) {
        event.currentTarget.checked = !desiredChecked;
        requireTrainingProfile(() => {
          setRosterComplete(week, dayKey, desiredChecked);
          renderRoster();
          renderUpcomingProgram();
        });
        return;
      }

      setRosterComplete(week, dayKey, desiredChecked);
      event.currentTarget
        .closest(".roster-card")
        .classList.toggle("is-complete", desiredChecked);
      updateRosterProgress(week);
      renderUpcomingProgram();
    });
  });

  updateRosterProgress(week);
}

if (rosterWeekSelect) {
  setCurrentRosterWeek(readLocalStorage(getCurrentWeekStorageKey()) || "1");

  rosterWeekSelect.addEventListener("change", () => {
    setCurrentRosterWeek(rosterWeekSelect.value);
    renderRoster();
    renderUpcomingProgram();
  });

  renderRoster();
}

if (homeCompleteButton) {
  homeCompleteButton.addEventListener("click", () => {
    if (!upcomingSession) return;

    requireTrainingProfile(() => {
      setCurrentRosterWeek(upcomingSession.week);
      setRosterComplete(upcomingSession.week, upcomingSession.dayKey, true);
      renderRoster();
      renderUpcomingProgram();

      homeCompleteButton.textContent = "Checked";
      window.setTimeout(() => {
        homeCompleteButton.textContent = "Check Session";
      }, 900);
    });
  });
}

if (upcomingWorkoutLink) {
  upcomingWorkoutLink.addEventListener("click", () => {
    syncProgramToSession(upcomingSession);
  });
}

renderUpcomingProgram();

/* ================================
   Smooth Reveal Animation
================================ */

const revealElements = document.querySelectorAll(
  ".feature-card, .day-card, .test-card, .rules-card, .program-layout, .roster-shell"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
  revealObserver.observe(element);
});
