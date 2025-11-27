#!/usr/bin/env node

import runGame from '../src/index.js'
import { gameRules, gameData } from '../src/games/progression.js'

runGame(gameRules, gameData)
