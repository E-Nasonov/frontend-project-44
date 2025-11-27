#!/usr/bin/env node

import runGame from '../src/index.js'
import { gameRules, gameData } from '../src/games/prime.js'

runGame(gameRules, gameData)
