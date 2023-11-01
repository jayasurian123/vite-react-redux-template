import React from 'react';
import { useNavigate } from 'react-router';

let globalNavigation = () => {};

export const ReactRouterGlobalNavigation = () => {
  globalNavigation = useNavigate();
  return <></>;
};

export default function getNavigation() {
  if (!globalNavigation) {
    throw new Error(
      'No history Object. You probably forgot to mount ReactRouterglobalNavigation.'
    );
  }

  return globalNavigation;
}
