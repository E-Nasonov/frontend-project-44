#!/usr/bin/env node

import runGame from '../src/index.js'
import { gameRules, gameData } from '../src/games/calc.js'

runGame(gameRules, gameData)
