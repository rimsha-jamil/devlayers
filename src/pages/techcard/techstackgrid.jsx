import React, { useEffect, useState } from "react";
import TechCard from "./techcard";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import reactGray from "../../assets/logo/react.svg";
import reactColor from "../../assets/logo/reactcol.svg";
import nodeGray from "../../assets/logo/nodejs.svg";
import nodeColor from "../../assets/logo/nodejscol.svg";
import awsGray from "../../assets/logo/aws.svg";
import awsColor from "../../assets/logo/awscol.svg";
import figmaGray from "../../assets/logo/figma.svg";
import figmaColor from "../../assets/logo/figmacol.svg";
import pythonGray from "../../assets/logo/python.svg";
import pythonColor from "../../assets/logo/pythoncol.svg";
import dockerGray from "../../assets/logo/docker.svg";
import dockerColor from "../../assets/logo/dockercol.svg";
import githubGray from "../../assets/logo/github.svg";
import azureGray from "../../assets/logo/azure.svg";
import azureColor from "../../assets/logo/azurecol.svg";
import tsGray from "../../assets/logo/typescript.svg";
import tsColor from "../../assets/logo/typescriptcol.svg";
import postGray from "../../assets/logo/postgresql.svg";
import postColor from "../../assets/logo/postgresqlcol.svg";

const stacks = [
  { name: "React", grayLogo: reactGray, colorLogo: reactColor },
  { name: "Node.js", grayLogo: nodeGray, colorLogo: nodeColor },
  { name: "AWS", grayLogo: awsGray, colorLogo: awsColor },
  { name: "Figma", grayLogo: figmaGray, colorLogo: figmaColor },
  { name: "Python", grayLogo: pythonGray, colorLogo: pythonColor },
  { name: "Docker", grayLogo: dockerGray, colorLogo: dockerColor },
  { name: "GitHub", grayLogo: githubGray, colorLogo: githubGray },
  { name: "Azure", grayLogo: azureGray, colorLogo: azureColor },
  { name: "TypeScript", grayLogo: tsGray, colorLogo: tsColor },
  { name: "PostgreSQL", grayLogo: postGray, colorLogo: postColor },
];

const TechStackGrid = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  return (
    <div className="relative">
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-[-1]"
          options={{
            fullScreen: {
              enable: false,
              zIndex: -1,
            },
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.9,
                },
              },
            },
            particles: {
              color: {
                value: "#0b4ea1",
              },
              links: {
                color: "#0b4ea1",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1.5,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}

      {/*  */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black mb-6">
          Our Technology Stack
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-center text-gray-700 mb-10">
          Tools that empower us to build secure, scalable, and modern solutions
          —
          <br className="hidden sm:block" />
          tailored for startups, enterprises, and everything in between.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
          {stacks.map((stack, index) => (
            <TechCard
              key={index}
              name={stack.name}
              grayLogo={stack.grayLogo}
              colorLogo={stack.colorLogo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackGrid;
